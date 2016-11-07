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
