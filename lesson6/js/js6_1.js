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

var arr = [1,45,6,0,2,5,7,3];
console.log('input array ', arr);

function add2list (x)
{
    var result = {};

    for (var i=x.length-1;i>=0;i--)
    {
        result = get_add(x[i],result);
    }

    function get_add (f,o)
    {
        var tmp = {};

        if (o.value == undefined)
        {
            tmp.rest = null;
        }
        else
        {
            tmp.rest = o;
        }

        tmp.value = f;

        return tmp;
    }

    return result;
}

var list = add2list(arr);
console.log('array2list',list);

function list2array (obj) // obj = {}
{
    var result = [];

    function carve (inp)
    {
        for (var prop in inp)
        {
            if ( (prop == 'value') && (inp[prop] != undefined) ) result.push(inp.value);
            if (typeof inp[prop] == 'object') carve(inp[prop]);
        }
        return true;
    }

    carve(obj);

    return result.reverse();
}

var arr2 = list2array(list);
console.log('list2array', arr2);

function prepend(add,obj) // add, obj  = {}
{
    var arr1 = list2array(add);
    var arr2 = list2array(obj);
    var result = arr1.concat(arr2);
    return add2list(result);
}

var prep = prepend (list,list);
console.log('prepend', prep);

function nth(obj,n) // obj = {} , n = int;
{
    var i=0,result;

    function deep (inp)
    {
        var res= inp.value;
        if (res == undefined) return undefined;
        if (i == n) return res;
        i++;
        return deep (inp.rest);
    }

    result = deep (obj);
    return result;
}

var a = 0; // номер отображаемого элемента в списке
var n = nth(list,a);
console.log('nth:'+a, n);