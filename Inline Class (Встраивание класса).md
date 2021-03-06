Встраивание класса

Проблема: Класс почти ничего не делает, ни за что не отвечает, и никакой ответственности для этого класса не планируется.

Решение: Переместите все фичи из описанного класса в другой.

Причины рефакторинга: часто этот рефакторинг оказывается следствием недавнего «переселения» части фич класса в другие, после чего от исходного класса мало что осталось.

Достоинства: меньше бесполезных классов — больше свободной оперативной памяти, в том числе, и у вас в голове.

Порядок рефакторинга

1. Создайте в классе-приёмнике публичные поля и методы, которые есть в классе-доноре. Методы должны обращаться к аналогичным методам класса-донора.
2. Замените все обращения к классу-донору обращениями к полям и методам класса-приёмника.
3. Самое время протестировать программу и убедиться, что во время работы не было допущено никаких ошибок. Если тесты показали, что все работает так, как должно, начинаем использовать<a href="https://github.com/helenasilkina/refactoring/blob/master/Move%20Field%20(Перемещение%20поля).md">перемещение метода</a> и  <a href="https://github.com/helenasilkina/refactoring/blob/master/Move%20Method%20(Перемещение%20метода).md">перемещение поля</a> для того, чтобы полностью переместить все функциональности в класс-приёмник из исходного класса. Продолжаем делать это, пока исходный класс не окажется совсем пустым.
4. Удалите исходный класс.
