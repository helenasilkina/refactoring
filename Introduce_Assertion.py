# After
def getExpenseLimit(self):
    # should have either expense limit or a primary project
    return self.expenseLimit if self.expenseLimit != NULL_EXPENSE else self.primaryProject.getMemberExpenseLimit()
        
# Refactoring
def getExpenseLimit(self):
    assert (self.expenseLimit != NULL_EXPENSE) or (self.primaryProject != None)
    return self.expenseLimit if (self.expenseLimit != NULL_EXPENSE) else self.primaryProject.getMemberExpenseLimit();
