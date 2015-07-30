# After
def potentialEnergy(mass, height):
  return mass * height * 9.81

# Refactoring
GRAVITATIONAL_CONSTANT = 9.81

def potentialEnergy(mass, height):
  return mass * height * GRAVITATIONAL_CONSTANT
