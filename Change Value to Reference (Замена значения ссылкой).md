Замена значения ссылкой

Проблема: есть много одинаковых экземпляров одного класса, которые можно заменить одним объектом.

Решение: превратите одинаковые объекты в один объект-ссылку.

Причины рефакторинга: во многих системах объекты можно разделить на две категории — объекты-значения и объекты-ссылки.

1. Объекты-ссылки — это когда одному объекту реального мира соответствует только один объект программы. Объектами-ссылками обычно становятся объекты пользователей, заказов, товаров и пр.
2. Объекты-значения — одному объекту реального мира соответствует множество объектов в программе. Такими объектами могут быть даты, телефонные номера, адреса, цвет и другие.

Выбор между ссылкой и значением не всегда очевиден. Иногда вначале есть простое значение с небольшим объёмом неизменяемых данных. Затем возникает необходимость добавить изменяемые данные и обеспечить передачу этих изменений при всех обращениях к объекту. Тогда появляется необходимость превратить его в объект-ссылку.

Достоинства: один объект хранит в себе всю последнюю информацию об определенной сущности. Если в этот объект вносятся изменения в одной части программы, они тут же становятся доступными из других частей программы, использующих этот объект.

Недостатки: объекты-ссылки гораздо сложнее в реализации.

Порядок рефакторинга

1. Используйте замену конструктора фабричным методом над классом, который должен порождать объекты-ссылки.
2. Определите, какой объект будет ответственным за предоставление доступа к объектам-ссылкам. Вместо создания нового объекта, когда он нужен, вам теперь нужно получать его из какого-то объекта-хранилища или статического поля-словаря.
3. Определите, будут ли объекты-ссылки создаваться заранее или динамически по мере надобности. Если объекты создаются предварительно, необходимо обеспечить их загрузку перед использованием.
4. Измените фабричный метод так, чтобы он возвращал объект-ссылку. Если объекты создаются заранее, необходимо решить, как обрабатывать ошибки при запросе несуществующего объекта. Также вам может понадобиться применить к фабрике переименование метода для информации о том, что метод возвращает только существующие объекты.
