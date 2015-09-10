// After
function withdraw(self, amount) {
    if (amount > self.balance) {
      return -1;
    } else {
      self.balance -= amount;
    }  
    return 0;
}    

// Refactoring
function withdraw(self, amount) {
    if (amount > self.balance) {
      throw BalanceException();
    }  
    self.balance -= amount;
}    
