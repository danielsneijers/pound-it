import { MAX_PARTICLES } from '../constants/constants'
import { RandomFromTo } from '../utils/math'
import Frame from '../utils/frame'

function ConfettiParticle (color) {
  const { width, height } = Frame

  return {
    color,
    x: Math.random() * width,
    y: Math.random() * height - height,
    radius: RandomFromTo(10, 30),
    density: Math.random() * MAX_PARTICLES + 10,
    tilt: Math.floor(Math.random() * 10) - 10,
    tiltAngleIncremental: Math.random() * 0.07 + 0.05,
    tiltAngle: 0
  }
}

export const createParticle = (color) => new ConfettiParticle(color)
