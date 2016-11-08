import Pressure from 'pressure'
import Store from 'store'
import debounce from 'lodash/debounce'
import ConfettiManager from 'modules/confetti'
import { fitCanvasToScreen } from 'utils/canvas'
import Frame from 'utils/frame'

require('styles.css')

const fist = document.getElementById('fist')

window.onresize = debounce(() => {
  Frame.updateDimensions()
  fitCanvasToScreen()
}, 200, { leading: true })

const Confetti = new ConfettiManager()

window.conf = Confetti

Confetti.init()

Pressure.set('#fist', {
  change: (force, event) => zoomIn(force)
})

function zoomIn (force) {
  console.log(force)
  // force limit 45
  const scale = force * 10 < 1 ? 1 : force * 10
  fist.style.transform = `scale(${scale})`

  if (scale >= 5 && !Store.confettiActive) {
    Confetti.start()
  }
}
