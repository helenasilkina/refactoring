// After
function Person {
  name;
}

// Refactoring
function Person {
  var name;

 function getName() {
    return name;
  }
  
  function setName(arg) {
    name = arg;
  }
}
