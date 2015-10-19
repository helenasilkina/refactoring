// Before refactoring
function checkPeople(people) {
  var found = false;
  for (var i = 0; i < people.length; i++) {
    if (!found) {
      if (i == "Mark") {
        found = true;
        sendResult(people[i]);
      }  
      if (i == "John") {
        found = true;
        sendResult(people[i]);
      }  
    }    
  }      
}        
        
// After refactoring
function checkPeople(people) {
  for (var i = 0; i < people.length; i++) {
    if (i == "Mark") {
      sendResult(people[i]);
      break;
    }  
    if (i == "John") {
      sendResult(people[i]);
      break;
    }  
  }    
}        
