import Store from 'store'
import { MAX_PARTICLES, CONFETTI_COLOURS } from 'constants/constants'
import Frame from 'utils/frame'
import { canvas, fitCanvasToScreen, initialDraw } from 'utils/canvas'
import { stepParticle, checkForReposition } from 'utils/particle'
import { createParticle } from 'factories/confettiParticle'

class ConfettiManager {
  constructor () {
    this.ctx = canvas.getContext('2d')
  }

  init () {
    Frame.updateDimensions()
    Store.resetParticleAnimationState()

    for (let i = 0; i < MAX_PARTICLES; i++) {
      const colourIndex = Math.floor(Math.random() * CONFETTI_COLOURS.length)
      const particleColor = CONFETTI_COLOURS[colourIndex]

      Store.particles.push(createParticle(particleColor))
    }

    this.start()
  }

  start () {
    fitCanvasToScreen();

    (function animloop ({ animationComplete, animationHandler }) {
      if (animationComplete) return null
      animationHandler = window.requestAnimationFrame(animloop)
      return initialDraw()
    })(Store)
  }

  stop () {
    Store.animationComplete = true

    if (this.ctx !== undefined) {
      this.ctx.clearRect(0, 0, Frame.width, Frame.height)
    }
  }

  update () {
    let remainingFlakes = 0

    Store.updateAngle(0.01, 0.1)

    Store.particles.forEach((particle, i) => {
      if (Store.animationComplete) return
      if (!Store.confettiActive && particle.y < -15) particle.y = Frame.height + 100

      stepParticle(particle, i, Store.angle)

      if (particle.y <= Frame.height) remainingFlakes++

      checkForReposition(particle, i)
    })

    if (remainingFlakes === 0) this.stop()
  }
}

export default ConfettiManager
