# After
class Bird:
    def getSpeed(self):
        if self.type == EUROPEAN:
            return self.getBaseSpeed();
        elif self.type == AFRICAN:
            return self.getBaseSpeed() - self.getLoadFactor() * self.numberOfCoconuts;
        elif self.type == NORWEGIAN_BLUE:
            return 0 if isNailed else self.getBaseSpeed(self.voltage)
        else:
            raise Exception("Should be unreachable")
            
# Refactoring
class Bird:
    def getSpeed(self):
        pass
class European(Bird):
    def getSpeed(self):
        return self.getBaseSpeed()
class African(Bird):
    def getSpeed(self):
        return self.getBaseSpeed() - self.getLoadFactor() * self.numberOfCoconuts
class NorvegianBlue(Bird):
    def getSpeed():
        return 0 if self.isNailed else self.getBaseSpeed(self.voltage)
# Tests with
speed = bird.getSpeed()
