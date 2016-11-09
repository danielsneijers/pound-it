import Pressure from 'pressure'
import * as firebase from 'firebase'
import debounce from 'lodash/debounce'
import Store from 'store'
import firebaseConfig from 'config/firebase'
import ConfettiManager from 'modules/confetti'
import { fitCanvasToScreen } from 'utils/canvas'
import Frame from 'utils/frame'

require('styles.css')

function bootstrapApp () {
  initStore()
  initEventListeners()
  initConfetti()
  initFirebase()
  initPressure()

  onAppLoaded()
}

function initStore () {
  Store.domElements.fist = document.getElementById('fist')
}

function initEventListeners () {
  window.onresize = debounce(() => {
    Frame.updateDimensions()
    fitCanvasToScreen()
  }, 200, { leading: true })
}

function initPressure () {
  Pressure.set('#fist', {
    change: (force, event) => zoomIn(force),
    end: () => {
      Store.domElements.fist.setAttribute('class', 'loaded animationEnded')
      Store.domElements.fist.style.transform = ''
    }
  })
}

function initConfetti () {
  const Confetti = new ConfettiManager()

  Confetti.init()
}

function initFirebase () {
  firebase.initializeApp(firebaseConfig)

  const database = firebase.database()

  Store.hitCounters.default = database.ref('hits/default')
}

function onAppLoaded () {
  setTimeout(() => {
    Store.domElements.fist.classList.add('loaded')
  }, 1)
}

// Init App
bootstrapApp()

function zoomIn (force) {
  if (Store.lockScale) {
    return
  }

  const scale = force * 10 < 1 ? 1 : force * 10
  const { fist } = Store.domElements

  fist.style.transform = `scale(${scale / 5})`

  if (scale >= 5 && !Store.confettiActive) {
    const Confetti = new ConfettiManager()

    Confetti.start()

    fist.classList.add('bounceIn')
    Store.lockScale = true

    incrementFirebase()
  }
}

function incrementFirebase () {
  Store.hitCounters.default.transaction((currentValue) => (currentValue || 0) + 1)
}
