// After
function getExpenseLimit(self) {
  // should have either expense limit or a primary project
  return  (self.expenseLimit != NULL_EXPENSE) ? self.expenseLimit : self.primaryProject.getMemberExpenseLimit();
}    
        
// Refactoring
function getExpenseLimit(self) {
  if ((self.expenseLimit != NULL_EXPENSE) || (self.primaryProject != None)) {
    throw new Error('Should have either expense limit or a primary project');
  }
  return (self.expenseLimit != NULL_EXPENSE) ? self.expenseLimit : self.primaryProject.getMemberExpenseLimit();
}    
