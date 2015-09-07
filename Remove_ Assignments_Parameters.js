// Before
function discount(inputVal, quantity) {
    if (inputVal > 50) {
      inputVal -= 2;
    }  
}        
        
// After
function discount(inputVal, quantity) {
  var result = inputVal;
  if (inputVal > 50) {
    result -= 2;
  }
}  
  
