// After
function printOwing(self) {
  self.printBanner();

  // print details
  print("name:", self.name);
  print("amount:", self.getOutstanding());
}    

// Refactoring
function printOwing(self) {
  self.printBanner();
  self.printDetails(self.getOutstanding());
}    

function printDetails(self, outstanding) {
  print("name:", self.name);
  print("amount:", outstanding);
}
