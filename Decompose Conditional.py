# After
if date.before(SUMMER_START) or date.after(SUMMER_END):
    charge = quantity * winterRate + winterServiceCharge
else:
    charge = quantity * summerRate

# Refactoring
if notSummer(date):
    charge = winterCharge(quantity)
else:
    charge = summerCharge(quantity)
