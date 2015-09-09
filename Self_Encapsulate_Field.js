// After
class Range {
  var low, high;
  function includes(arg) {
    return arg >= low && arg <= high;
  }
}

// Refactoring
class Range {
  var low, high;
  function includes(arg) {
    return arg >= getLow() && arg <= getHigh();
  }
  function getLow() {
    return low;
  }
  function getHigh() {
    return high;
  }
}
