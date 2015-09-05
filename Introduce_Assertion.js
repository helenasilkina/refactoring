// After
function getExpenseLimit(self) {
  // should have either expense limit or a primary project
  return  (self.expenseLimit != NULL_EXPENSE) ? self.expenseLimit : self.primaryProject.getMemberExpenseLimit();
}    
        
// Refactoring
function getExpenseLimit(self) {
  assert((self.expenseLimit != NULL_EXPENSE) || (self.primaryProject != None));
  return (self.expenseLimit != NULL_EXPENSE) ? self.expenseLimit : self.primaryProject.getMemberExpenseLimit();
}    
