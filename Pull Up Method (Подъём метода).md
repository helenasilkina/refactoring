<strong>Подъём метода</strong>

Проблема: подклассы имеют методы, которые делают схожую работу.

Решение: в этом случае нужно сделать методы идентичными, а затем переместить их в суперкласс.

Причины рефакторинга: подклассы развивались независимо друг от друга. Это привело к созданию одинаковых (или очень похожих) полей и методов.

Достоинства:

1. Убирает дублирование кода. Если вам нужно внести изменения в метод, лучше сделать это в одном месте, чем искать все дубликаты этого метода в подклассах.
2. Также этот рефакторинг можно использовать и в случае, если подкласс зачем-то переопределяет метод суперкласса, но, по сути, делает ту же работу.

Порядок рефакторинга:

1. Обследовать похожие методы в суперклассах. Если они не одинаковы, привести их к одному и тому же виду.
2. Если методы используют разный набор параметров, привести эти параметры к тому виду, который вы хотите видеть в суперклассе.
3. Скопируйте метод в суперкласс. Здесь вы можете столкнуться с тем, что код метода использует поля и методы, которые есть только в подклассах, а посему недоступны в суперклассе. Чтобы решить эту проблему, вам нужно:
 - Для полей: либо поднимите нужные поля в суперкласс, либо используйте самоинкапсуляцию поля для создания геттеров и сеттеров в подклассах, а затем объявите эти геттеры абстрактным методом в суперклассе.
 - Для методов: либо поднимите нужные методы в суперкласс, либо объявите для них абстрактные методы в суперклассе (обратите внимание, ваш класс станет абстрактным, если не был таким до этого).
4. Удалите методы в подклассах.
5. Проверьте места, в которых вызывается метод. Возможно, в некоторых из них использование подкласса можно заменить суперклассом.
