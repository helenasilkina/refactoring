// After
class Report {
  function sendReport(self) {
    var nextDay = Date(self.previousEnd.getYear(), self.previousEnd.getMonth(), self.previousEnd.getDate() + 1);
  }        
}            

// Refactoring
class Report {
  function sendReport(self) {
    var nextDay = self._nextDay(self.previousEnd);
  }      
        
  function _nextDay(self, arg) {
    return Date(arg.getYear(), arg.getMonth(), arg.getDate() + 1);
  }  
}        
