// After
var low = daysTempRange().getLow();
var high = daysTempRange().getHigh();
var withinPlan = plan.withinRange(low, high);

// Refactoring
var withinPlan = plan.withinRange(daysTempRange());
