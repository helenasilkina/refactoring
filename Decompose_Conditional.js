// After
if (date.before(SUMMER_START) || date.after(SUMMER_END)) {
    charge = quantity * winterRate + winterServiceCharge;
} else {
    charge = quantity * summerRate;
}

// Refactoring
var charge;
if (notSummer(date)) {
    charge = winterCharge(quantity);
} else {
    charge = summerCharge(quantity);
}
