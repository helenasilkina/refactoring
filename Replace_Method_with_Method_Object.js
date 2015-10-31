// After
class Order() {
  function price(self) {
    var primaryBasePrice = 0;
    var secondaryBasePrice = 0;
    var tertiaryBasePrice = 0;
  }  
}

// Refactoring
class Order() {
  function price(self) {
    return PriceCalculator(self).compute();
  }      
}        

class PriceCalculator() {
  self._primaryBasePrice = 0
  self._secondaryBasePrice = 0
  self._tertiaryBasePrice = 0

  // copy relevant information from order object.
  function __init__(self, order) {}    

  // long computation.
  function compute(self) {}
}        
