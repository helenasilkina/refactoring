//After
function getValueForPeriod(periodNumber)  {
  try {
    return values[periodNumber];
  } catch(IndexError) {
    return 0;
  }    
}        

// Refactoring
function getValueForPeriod(self, periodNumber) {
  if (periodNumber >= self.values.length) {
    return 0;
  }    
  return self.values[periodNumber];
}    
