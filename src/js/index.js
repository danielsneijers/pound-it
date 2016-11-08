import debounce from 'lodash/debounce'
import ConfettiManager from 'modules/confetti'
import { fitCanvasToScreen } from 'utils/canvas'
import Frame from 'utils/frame'

window.onresize = debounce(() => {
  Frame.updateDimensions()
  fitCanvasToScreen()
}, 200, { leading: true })

const Confetti = new ConfettiManager()

Confetti.init()

  // function ClearTimers () {
  //   clearTimeout(Store.reactivationTimerHandler)
  //   clearTimeout(Store.animationHandler)
  // }

  // function DeactivateConfetti () {
  //   Store.confettiActive = false
  //   ClearTimers()
  // }

  // function RestartConfetti () {
  //   ClearTimers()
  //   StopConfetti()
  //
  //   Store.reactivationTimerHandler = setTimeout(function () {
  //     Store.confettiActive = true
  //     Store.animationComplete = false
  //     initializeConfetti()
  //   }, 100)
  // }
