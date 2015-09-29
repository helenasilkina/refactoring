// After
function printOwing(self) {
  self.printBanner();

  // print details
  console.log("name: ", self.name);
  console.log("amount: ", self.getOutstanding());
}    

// Refactoring
function printOwing(self) {
  self.printBanner();
  self.printDetails(self.getOutstanding());
}    

function printDetails(self, outstanding) {
  console.log("name: ", self.name);
  console.log("amount: ", outstanding);
}
