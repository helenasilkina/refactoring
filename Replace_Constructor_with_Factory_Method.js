// After
class Employee {
  function employee(type) {
    this.type = type;
  }
}

// Refactoring
class Employee {
  function Employee(type) {
    var employee = new Employee(type);
    return employee;
  }
}
