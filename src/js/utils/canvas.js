import { MAX_PARTICLES } from '../constants/constants'
import ConfettiManager from '../modules/confetti'
import Frame from '../utils/frame'
import Store from '../store'

export const canvas = document.getElementById('canvas')

export function fitCanvasToScreen () {
  canvas.width = Frame.width
  canvas.height = Frame.height
}

export function initialDraw () {
  const ctx = canvas.getContext('2d')
  const { width, height } = Frame
  const Confetti = new ConfettiManager()

  ctx.clearRect(0, 0, width, height)

  for (let i = 0; i < MAX_PARTICLES; i++) {
    drawParticle(Store.particles[i])
  }

  Confetti.update()
}

export function drawParticle (particle) {
  const ctx = canvas.getContext('2d')

  ctx.beginPath()
  ctx.lineWidth = particle.radius / 2
  ctx.strokeStyle = particle.color
  ctx.moveTo(particle.x + particle.tilt + (particle.radius / 4), particle.y)
  ctx.lineTo(particle.x + particle.tilt, particle.y + particle.tilt + (particle.radius / 4))

  return ctx.stroke()
}
