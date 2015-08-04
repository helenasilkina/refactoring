# After
class Employee {
  Employee(int type) {
    this.type = type;
  }
}

# Refactoring
class Employee {
  static Employee create(int type) {
    employee = new Employee(type);
    return employee;
  }
}
