# After
basePrice = quantity * itemPrice
seasonalDiscount = store.getSeasonalDiscount()
fees = store.getFees()
finalPrice = discountedPrice(basePrice, seasonalDiscount, fees)

# Refactoring
basePrice = quantity * itemPrice
finalPrice = discountedPrice(basePrice, store)
