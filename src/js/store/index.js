const Store = {
  confettiActive: true,
  particles: [],
  angle: 0,
  tiltAngle: 0,
  animationHandler: null,
  animationComplete: false,
  deactivationTimerHandler: null,
  reactivationTimerHandler: null,

  resetParticleAnimationState () {
    this.particles = []
    this.animationComplete = false
  },

  updateAngle (angle = 0, tiltAngle = 0) {
    this.angle += angle
    this.tiltAngle += tiltAngle
  }
}

export default Store
