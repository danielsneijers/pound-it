const Store = {
  lockScale: false,
  confettiActive: false,
  particles: [],
  angle: 0,
  tiltAngle: 0,
  animationHandler: null,
  animationComplete: false,
  deactivationTimerHandler: null,
  reactivationTimerHandler: null,

  hitCounters: {},
  domElements: {},

  resetParticleAnimationState () {
    this.particles = []
    this.animationComplete = false
  },

  updateAngle (angle = 0, tiltAngle = 0) {
    this.angle += angle
    this.tiltAngle += tiltAngle
  },

  clearTimers () {
    clearTimeout(this.reactivationTimerHandler)
    clearTimeout(this.animationHandler)
  }
}

export default Store
