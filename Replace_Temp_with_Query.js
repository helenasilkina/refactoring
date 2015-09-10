// After
function calculateTotal() {
  var basePrice = quantity * itemPrice;
  if (basePrice > 1000) {
    return basePrice * 0.95;
  } else {
    return basePrice * 0.98;
  }  
}        

// Refactoring
function calculateTotal() {
  if (basePrice() > 1000) {
    return basePrice() * 0.95;
  } else {
    return basePrice() * 0.98;
  }    
}        

function basePrice() {
  return quantity * itemPrice;
}    
