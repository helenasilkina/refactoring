# Before refactoring
def checkPeople(people):
  found = False;
  for i in people:
    if not found:
      if i == "Mark":
        found = True;
        sendResult(i);
      if i == "John":
        found = True;
        sendResult(i);
        
# After refactoring
def checkPeople(people):
  for i in people:
    if i == "Mark":
      sendResult(i);
      break;
    if i == "John":
      sendResult(i);
      break
