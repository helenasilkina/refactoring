Расходящиеся модификации

Расходящиеся модификации похожи на <a href="https://github.com/helenasilkina/refactoring/blob/master/Shotgun%20Surgery%20(Стрельба%20дробью).md">Стрельбу дробью</a>, но на самом деле являются ее противоположностью. Расходящиеся модификации имеют место, когда есть один класс, в котором производится много разных изменений, а <a href="https://github.com/helenasilkina/refactoring/blob/master/Shotgun%20Surgery%20(Стрельба%20дробью).md">Стрельба дробью</a> — это одно изменение, затрагивающее одновременно много классов.

Симптомы и признаки: При внесении изменений в класс приходится изменять большое число различных методов. Например, для добавления нового вида товара вам нужно изменить методы поиска, отображения и заказа товаров.

Причины появления: Часто появление расходящихся модификаций является следствием плохой структурированности программы или программирования методом копирования-вставки.

Лечение

1. Разделите поведения класса, используя <a href="https://github.com/helenasilkina/refactoring/blob/master/Extract%20Class%20(Извлечение%20класса).md">извлечение класса</a>.
2. Если различные классы имеют одно и то же поведение, возможно, следует объединить эти классы, используя наследование (<a href="https://github.com/helenasilkina/refactoring/blob/master/Extract%20Superclass%20(Извлечение%20суперкласса).md">извлечение суперкласса</a>и <a href="https://github.com/helenasilkina/refactoring/blob/master/Extract%20Subclass%20(Извлечение%20подкласса).md">извлечение подкласса</a>).

Выигрыш

1. Улучшает организацию кода.
2. Уменьшает дублирование кода.
3. Упрощает поддержку.

