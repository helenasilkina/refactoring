Удаление параметра

Проблема: Параметр не используется в теле метода.

Решение: Удалите неиспользуемый параметр.

Причины рефакторинга

Каждый параметр в вызове метода заставляет человека, пишущего код метода, размышлять о том, какая информация может оказаться в этом параметре. И если параметр потом вовсе не используется в теле метода, значит, весь этот мыслительный процесс уходит впустую.
Кроме того, дополнительные параметры – это ещё и лишний код к выполнению.
Порой мы добавляем параметры на будущее, предчувствуя скорые изменения в методе, для которых потребуется этот параметр. Тем не менее, опыт показывает, что лучше добавить параметр тогда, когда он действительно понадобится, ведь ожидаемые изменения могут так и не наступить.

Достоинства: Метод должен содержать только действительно необходимые параметры.

Когда нельзя применить: Не стоит начинать этот рефакторинг, если метод имеет альтернативные реализации в подклассах или в суперклассе, и ваш параметр используется в этих реализациях.

Порядок рефакторинга
1. Проверьте, не определён ли метод в суперклассе или подклассе. Если так, используется ли там параметр? Если в какой-то из реализаций параметр используется, воздержитесь от рефакторинга.
2. Следующий шаг важен, чтобы сохранить работоспособность программы во время рефакторинга. Итак, создайте новый метод, скопировав старый, и удалите из него требуемый параметр. Замените код старого метода вызовом нового метода.
3. Найдите все обращения к старому методу и замените их обращениями к новому методу.
4. Удалите старый метод. Этот шаг неосуществим, если старый метод является частью публичного интерфейса. В этом случае, старый метод нужно пометить как устаревший (deprecated).
