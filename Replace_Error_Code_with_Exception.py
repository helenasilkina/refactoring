# After
def withdraw(self, amount):
    if amount > self.balance:
        return -1
    else:
        self.balance -= amount
    return 0

# Refactoring
def withdraw(self, amount):
    if amount > self.balance:
        raize BalanceException()
    self.balance -= amount
