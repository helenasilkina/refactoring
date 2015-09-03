// After
function foundPerson(people) {
    people.forEach(function(element, i, array) {
        if (people[i] == "Don") {
            return "Don";
        }    
        if (people[i] == "John") {
            return "John";
        }    
        if (people[i] == "Kent") {
            return "Kent";
        }    
    });        
    return "";
}    

// Refactoring
function foundPerson(people) {
   ["Don", "John", "Kent"].forEach(function(element, i, array) {
	  people.forEach(function(name, y, people) {
  		if (name == element) {
  			return name;
  		}
	  });
  });         
  return "";
}    
