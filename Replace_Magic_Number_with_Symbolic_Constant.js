// After
function potentialEnergy(mass, height) {
  return mass * height * 9.81;
}  

// Refactoring
var GRAVITATIONAL_CONSTANT = 9.81;

function potentialEnergy(mass, height) {
  return mass * height * GRAVITATIONAL_CONSTANT;
}  
