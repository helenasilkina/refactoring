// After
if (isSpecialDeal()) {
  total = price * 0.95;
  send();
} else {
  total = price * 0.98;
  send();
}

// Refactoring
var total;
if (isSpecialDeal()) {
  total = price * 0.95;
} else {
  total = price * 0.98;
}    
send();
