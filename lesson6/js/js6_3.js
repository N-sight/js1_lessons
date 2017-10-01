/*
 1) Объекты могут быть использованы для построения различных структур данных.
 Часто встречающаяся структура – список (не путайте с массивом).
 Список – связанный набор объектов, где первый объект содержит ссылку на второй, второй – на третий, и т.п.
 var list = { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } };
 Списки удобны тем, что они могут делиться частью своей структуры.
 Например, можно сделать два списка,
 {value: 0, rest: list} и
 {value: -1, rest: list}, где list – это ссылка на ранее объявленную переменную.
 Это два независимых списка, при этом у них есть общая структура list,
 которая включает три последних элемента каждого из них.
 Кроме того, оригинальный список также сохраняет свои свойства как отдельный список из трёх элементов.

 -Напишите функцию arrayToList, которая строит такую структуру, получая в качестве аргумента [1, 2, 3],

 -а также функцию listToArray, которая создаёт массив из списка.

 -Также напишите вспомогательную функцию prepend,
 которая получает элемент и создаёт новый список,
 где этот элемент добавлен спереди к первоначальному списку,

 -и функцию nth, которая в качестве аргументов принимает список и число, а возвращает элемент
 на заданной позиции в списке, или же undefined в случае отсутствия такого элемента.
 */
'use strict';

var user = {
    name: 'Sergey',
    age: 30,
    email: 'sergey@gmail.com',
    friends: ['Sveta', 'Artem'],
    car :
    {
        class: 'B',
        mark: 'VW'
    }
};

var k = {}, k1= {}, k2 = {};

function pick (obj,keys)
{
    var result = {};

    function deep (obj)
    {
        for (var prop in obj)
        {
            if ( ( obj.hasOwnProperty(prop) ) && ( prop != 'prototype') ) // выделили 'свои' свойства
            {
                for (var key in keys)
                {

                    //console.log (keys[key]+' '+prop);
                    if ( keys[key] == prop)
                    {
                        //console.log('catch!' + obj[prop]);
                        result[prop] = obj[prop];
                    }
                }
            }

            if (typeof obj[prop] == 'object') deep(obj[prop]);

        }
    }

    deep (obj);
    return result;
}



k = pick(user,['age','name']);
console.log (k);
k1 = pick (user, ['friends','car']);
console.log (k1);
k2 = pick(user, ['name', 'second-name']);
console.log (k2);