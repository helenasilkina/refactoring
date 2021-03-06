<strong>Спуск поля</strong>

Проблема: поле используется только в некоторых подклассах.

Решение: переместите поле в эти подклассы.

Причины рефакторинга:

1. Поле, которое планировали сделать универсальным для всех классов, по факту, используется только в некоторых подклассах. Такая ситуация может возникнуть, когда планируемые фичи так и не были реализованы.
2. Кроме того, такая ситуация может возникнуть после извлечения (или удаления) части функциональности из иерархии классов.

Достоинства:

1. Улучшает связность внутри классов. Поле находится там, где оно реально используется.
2. При перемещении в несколько подклассов одновременно, появляется возможность развивать поля независимо друг от друга. Правда, такое действие создаёт дублирование кода, поэтому стоит спускать поля, только если вы действительно намерены использовать их по-разному.

Порядок рефакторинга:

1. Объявите поле во всех необходимых подклассах.
2. Удалите поле из суперкласса.
