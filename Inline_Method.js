// After
class PizzaDelivery {
  function getRating(self) {
    return self.moreThanFiveLateDeliveries() ? 2 : 1;
  }    

  function moreThanFiveLateDeliveries(self) {
      return self.numberOfLateDeliveries > 5;
  }
}    

// Refactoring
class PizzaDelivery {
  function getRating(self) {
    return self.numberOfLateDeliveries > 5 ? 2 : 1;
  }  
}  
