// After
function disabilityAmount() {
    if (seniority < 2) {
      return 0;
    }    
    if (monthsDisabled > 12) {
      return 0;
    }    
    if (isPartTime) {
      return 0;
    }    
}

// Refactoring
function disabilityAmount() {
    if (isNotEligableForDisability()) {
      return 0;
    }    
}
