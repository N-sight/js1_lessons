/**
 * Created by user on 13.08.2016.
 */

'use strict';
// Первая часть. Необходимо разобраться почему работает именно так.
// Объяснения написать в виде комментария к каждой строчке

var a = 1, b = 1, c, d; // В этой строчке идет объявление переменных `a`,`b`,`c`,`d` .
// Переменнные `a` и `b` дополнительно определены и им присвоено значение , переменные `c` и `d` неопределены.

c = ++a; alert(c); // 2  Опредение переменной `c` происходит с помощью операции присваивания.
// В нее передается префиксный инкремент от переменной `a`. Т.е. сначала к
// переменной `a` прибавляем 1, потом полученное значение передаем в `c`
d = b++; alert(d); // 1 Опредение переменной `d` происходит с помощью операции присваивания.
// В нее передается постфиксный инкремент от переменной `b`. Т.е. сначала к
// переменной `d`  присваивается значение `b` , а уже потом к `b` прибавляем 1,

c = (2+ ++a); alert(c); // 5 Заново определяем переменную `c`, старое значение - стирается.
// до этой операции переменной `a` уже было присвоено значение 2.  У операции сложения приоритет 13 ,
// у операции префиксного инкремента - 15 . Поэтому сначала переменную `a` увеличиваем на единицу, `a` становится равным 3,
// и потом ,к этому результату прибавляем 2. Получается (2+1) +2 = 5

d = (2+ b++); alert(d); // 4 Заново определяем переменную `d`, старое значение - стирается.
// до этой операции переменной `b` уже было присвоено значение 2.  У операции сложения приоритет 13 ,
// у операции постфиксного инкремента - 16. Выполняя операцию постфиксного инкремента мы увеличиваем значение переменной
// после всех операций, поэтому в выражении значение `b++` будет равняться 2  и потом выполняем
// сложение : к 2 прибавляем 2. = 4. Затем значение переменной `b` увеличивается на единицу и становится равным 3.

alert(a); // 3 была выполненна операция префиксного инкремента. 2+1 = 3
alert(b); // 3 была выполненна операция постфиксного инкремента. 2+1 = 3





