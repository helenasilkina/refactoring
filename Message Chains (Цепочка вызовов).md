<strong>Цепочка вызовов</strong>

Симптомы и признаки: Вы видите в коде цепочки вызовов вроде такой $a->b()->c()->d()

Причины появления: Цепочка вызовов появляется тогда, когда клиент запрашивает у одного объекта другой, в свою очередь этот объект запрашивает ещё один и т. д. Такие последовательности вызовов означают, что клиент связан с навигацией по структуре классов. Любые изменения промежуточных связей означают необходимость модификации клиента.

Лечение:

1. Для удаления цепочки вызовов применяется приём <a href="https://github.com/helenasilkina/refactoring/blob/master/Hide%20Delegate%20(Сокрытие%20делегирования).md">сокрытие делегирования</a>.
2. Иногда лучше рассмотреть, для чего используется конечный объект. Может быть, имеет смысл использовать <a href="https://github.com/helenasilkina/refactoring/blob/master/Extract_Method%20(Извлечение%20метода).md">извлечение метода</a>, чтобы извлечь эту функциональность, и передвинуть её в самое начало цепи с помощью <a href="https://github.com/helenasilkina/refactoring/blob/master/Move%20Method%20(Перемещение%20метода).md">перемещения метода</a>.

Выигрыш:

1. Может уменьшить связность между классами цепочки.
2. Может уменьшить размер кода.

Не стоит трогать, если вы перестараетесь в процессе сокрытия делегации, в коде будет довольно сложно понять, где именно осуществляется конкретная работа. Другими словами, появится запах <a href="https://github.com/helenasilkina/refactoring/blob/master/Middle%20Man%20(Посредник).md">Посредник</a>.
