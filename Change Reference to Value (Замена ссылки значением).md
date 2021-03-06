Замена ссылки значением

Проблема: у вас есть объект-ссылка, который слишком маленький и неизменяемый, чтобы оправдать сложности по управлению его жизненным циклом.

Решение: превратите его в объект-значение.

Причины рефакторинга

1. Побудить к переходу от ссылки к значению могут возникшие при работе с объектом-ссылкой неудобства.
2. Объектами-ссылками необходимо некоторым образом управлять:
2.1 Всегда приходится запрашивать у объекта-хранилища нужный объект;
2.2. Ссылки в памяти тоже могут оказаться неудобными в работе;
работать с объектами-ссылками, в отличие от объектов-значений, особенно сложно в распределённых и параллельных системах.
3. Кроме того, объекты-значения будут особенно полезны, если вам больше подходит неизменяемость объектов, чем возможность изменения их состояния во время жизни объекта.

Достоинства

1. Важное свойство объектов-значений заключается в том, что они должны быть неизменяемыми. При каждом запросе, возвращающем значение одного из них, должен получаться одинаковый результат. Если это так, то не возникает проблем при наличии многих объектов, представляющих одну и ту же вещь.
2. Объекты-значения гораздо проще в реализации.

Недостатки: если значение изменяемое, вам необходимо обеспечить, чтобы при изменении любого из объектов обновлялись значения во всех остальных, которые представляют ту же самую сущность. Это настолько обременительно, что проще для этого создать объект-ссылку.

Порядок рефакторинга

1. Обеспечьте неизменяемость объекта. Объект не должен иметь сеттеров или других методов, меняющих его состояние и данные (в этом может помочь удаление сеттера). Единственное место, где полям объекта-значения присваиваются какие-то данные, должен быть конструктор.
2. Создайте метод сравнения для того, чтобы иметь возможность сравнить два объекта-значения.
3. Проверьте, возможно ли удалить фабричный метод и сделать конструктор объекта публичным.
