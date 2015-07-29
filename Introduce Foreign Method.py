# After
class Report:
    def sendReport(self):
        nextDay = Date(self.previousEnd.getYear(),
            self.previousEnd.getMonth(), self.previousEnd.getDate() + 1);

# Refactoring
class Report:
    def sendReport(self):
        newStart = self._nextDay(self.previousEnd)

    def _nextDay(self, arg):
        return Date(arg.getYear(), arg.getMonth(), arg.getDate() + 1)
