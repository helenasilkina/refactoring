<strong>Замена простого поля объектом</strong>

Проблема: В классе (или группе классов) есть поле простого типа. У этого поля есть своё поведение и связанные данные.

Решение: Создайте новый класс, поместите в него старое поле и его поведения, храните объект этого класса в исходном классе.

Причины рефакторинга

1. В целом этот рефакторинг является частным случаем <a href="https://github.com/helenasilkina/refactoring/blob/master/Extract%20Class%20(Извлечение%20класса).md">извлечения класса</a>. Отличия заключаются в причинах, повлёкших рефакторинг.
2. В <a href="https://github.com/helenasilkina/refactoring/blob/master/Extract%20Class%20(Извлечение%20класса).md">извлечении класса</a> мы имеем один класс, который отвечает за разные вещи, и хотим разделить его ответственность.
3. В замене простого поля объектом мы имеем поле примитивного типа (число, строка и пр.), которое с развитием программы перестало быть таким простым и обзавелось связанными данными и поведениями. С одной стороны, в наличии таких полей нет ничего страшного, с другой – такое семейство-полей-и-поведений может содержаться в нескольких классах одновременно, создавая много дублирующего кода. Поэтому мы создаём для всего этого новый класс и перемещаем в него не только само поле, но и связанные с ним данные и поведения.

Достоинства: Улучшает связность внутри классов. Данные и поведения этих данных находятся в одном классе.

Порядок рефакторинга: 

1. Перед началом рефакторинга, посмотрите есть ли прямые обращения к полю внутри класса. Если да, примените <a href="https://github.com/helenasilkina/refactoring/blob/master/Self_Encapsulate_Field%20(Самоинкапсуляция%20поля).md">самоинкапсуляцию поля</a>, чтобы скрыть его в исходном классе.
2. Создайте новый класс и скопируйте в него ваше поле и его геттер. Кроме того, создайте конструктор, принимающий простое значение этого поля. В этом классе не будет сеттера, т.к. каждое новое значение поля, подаваемое в оригинальный класс, будет создавать новый объект-значение.
3. В исходном классе поменяйте тип поля на новый класс.
4. В его геттере в исходном классе обращайтесь к геттеру связанного объекта.
5. В сеттере создайте новый объект-значение. Возможно, вам потребуется также создать новый объект в конструкторе, если ранее там задавались какие-то начальные значения для поля.

Последующие шаги:

1. После этого рефакторинга иногда имеет смысл применить <a href="https://github.com/helenasilkina/refactoring/blob/master/Change%20Value%20to%20Reference%20(Замена%20значения%20ссылкой).md">замену значения ссылкой над полем</a>, содержащим объект. Это позволяет вместо хранения десятков объектов для одного и того же значения поля хранить ссылку на один объект, соответствующий этому значению.
2. Чаще всего такое решение потребуется в случаях, когда вы хотите иметь один объект, отвечающий за один реальный объект из жизни (например, пользователи, заказы, документы и так далее). В тоже время такой подход будет лишним для объектов дат, денег, диапазонов и т.п.
