# After
low = daysTempRange().getLow()
high = daysTempRange().getHigh()
withinPlan = plan.withinRange(low, high)

# Refactoring
withinPlan = plan.withinRange(daysTempRange())
