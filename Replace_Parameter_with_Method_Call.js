// After
var basePrice = quantity * itemPrice;
var seasonalDiscount = store.getSeasonalDiscount();
var fees = store.getFees();
var finalPrice = discountedPrice(basePrice, seasonalDiscount, fees);

// Refactoring
var basePrice = quantity * itemPrice;
var finalPrice = discountedPrice(basePrice, store);
