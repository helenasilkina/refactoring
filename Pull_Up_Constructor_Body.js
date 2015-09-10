// After
class Manager(Employee) {
  function __init__(self, name, id, grade) {
    self.name = name;
    self.id = id;
    self.grade = grade;
  }    
}        

// Refactoring
class Manager(Employee) {
  function __init__(self, name, id, grade) {
    Employee.__init__(name, id);
    self.grade = grade;
  }    
}        
