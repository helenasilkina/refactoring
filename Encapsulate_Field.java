// After
class Person {
  public String name;
}

// Refactoring
class Person {
  private String name;

  public String getName() {
    return name;
  }
  public void setName(String arg) {
    name = arg;
  }
}
