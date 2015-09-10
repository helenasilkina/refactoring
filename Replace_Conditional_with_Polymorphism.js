// After
class Bird() {
  function getSpeed(self) {
    if (self.type == EUROPEAN) {
        return self.getBaseSpeed();
    } else if (self.type == AFRICAN) {
        return (self.getBaseSpeed() - self.getLoadFactor() * self.numberOfCoconuts);
    } else if (self.type == NORWEGIAN_BLUE) {
        return isNailed ? 0 : self.getBaseSpeed(self.voltage);
    } else {
        throw "Should be unreachable";
    }    
  }          
}            
            
// Refactoring
class Bird() {
  function getSpeed(self) {  }
}  

class European(Bird) {
  function getSpeed(self) {
    return self.getBaseSpeed();
  }    
}

class African(Bird) {
  function getSpeed(self) {
    return (self.getBaseSpeed() - self.getLoadFactor() * self.numberOfCoconuts);
  }    
}

class NorvegianBlue(Bird) {
  function getSpeed() {
    return self.isNailed ? 0 : self.getBaseSpeed(self.voltage);
  }    
}        
        
# Tests with
var speed = bird.getSpeed()
