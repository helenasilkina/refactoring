# After
def foundPerson(people):
    for i in range(len(people)):
        if people[i] == "Don":
            return "Don"
        if people[i] == "John":
            return "John"
        if people[i] == "Kent":
            return "Kent"
    return ""

# Refactoring
def foundPerson(people):
    candidates = ["Don", "John", "Kent"]
    for i in range(len(people)):
        if people[i] in candidates:
            return people[i]
    return ""
