import ConfettiManager from './modules/confetti'

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
