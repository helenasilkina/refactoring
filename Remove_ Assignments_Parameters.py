# Before
def discount(inputVal, quantity):
    if inputVal > 50:
        inputVal -= 2
        
# After
def discount(inputVal, quantity):
    result = inputVal
    if inputVal > 50:
        result -= 2
