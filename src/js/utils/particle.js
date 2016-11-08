import Frame from './frame'
import Store from '../store'

export function stepParticle (particle, particleIndex, angle) {
  particle.y += (Math.cos(angle + particle.density) + 3 + particle.radius / 2) / 2
  particle.x += Math.sin(angle)
  particle.tilt = (Math.sin(particle.tiltAngle - (particleIndex / 3))) * 15
  particle.tiltAngle += particle.tiltAngleIncremental
}

export function repositionParticle (particle, xCoordinate, yCoordinate, tilt) {
  particle.x = xCoordinate
  particle.y = yCoordinate
  particle.tilt = tilt
}

export function checkForReposition (particle, index) {
  if ((
    particle.x > Frame.width + 20 ||
    particle.x < -20 ||
    particle.y > Frame.height
  ) && Store.confettiActive) {
    if (index % 5 > 0 || index % 2 === 0) { // 66.67% of the flakes
      repositionParticle(particle, Math.random() * Frame.width, -10, Math.floor(Math.random() * 10) - 10)
    } else {
      Math.sin(Store.angle) > 0
        ? repositionParticle(particle, -5, Math.random() * Frame.height, Math.floor(Math.random() * 10) - 10) // Enter from the left
        : repositionParticle(particle, Frame.width + 5, Math.random() * Frame.height, Math.floor(Math.random() * 10) - 10) // Enter from the right
    }
  }
}
