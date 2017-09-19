/**
 * Created by user on 19.09.2017.
 */
/*
 2) Реализовать функцию objectToQueryString(object), которая принимает аргументом объект, возвращает строку.
 Примеры работы:
 console.log(objectToQueryString({user: 'Dmitry'}));
 // user=Dmitry
 console.log(objectToQueryString({user: 'Dmitry', password: 'pass'}));
 // user=Dmitry&password=pass
 console.log(objectToQueryString({user: 'Dmitry', password: 'pass', id=1}));
 // user=Dmitry&password=pass&id=1

 *Для доступа к свойсвам объекта в цикле используется цикл вида:
 for(var prop in obj) {} - где obj - объект, свойства которого будем перебирать в цикле,
 prop - ключ или имя свойства объекта, соотвественно obj[prop] - значение по ключу или имени свойства объекта
 Свойства в объекте могут быть наследованы от прототипа, чтобы проверить, является ли свойство свойством прототипа,
 используется метод hasOwnProperty(propName).
 Пример: ({ a: '1' }).hasOwnProperty('a'); //true
 */

'use strict';

var object={
    user: 'Dmitry',
    password: 'pass'
};

object.prototype = {
    id:1,
    admin: true
};

function object2string(obj) // FD
{
    var get= '',i=0;

    for (var prop in obj)
    {
        //console.log (prop+' = '+obj[prop]);

        /* console.log (prop+' = '+obj.hasOwnProperty(prop));*/

        if ( ( obj.hasOwnProperty(prop) ) && ( prop != 'prototype') ) // выделили 'свои' свойства
        {
            //console.log (prop+' = '+obj[prop]);
            if ( i !=0) get +="&"+prop+"="+obj[prop];
            else
            {
                get +=prop+"="+obj[prop];
            }
            i++;
        }
    }

    //console.log ( typeof (get));
    //delete get[0];
    // get.splice(0,1);

    return get;
}
console.log(object);
console.log(object2string(object));
console.log({user: 'Dmitry', password: 'pass', id:1});
console.log(object2string( {user: 'Dmitry', password: 'pass', id:1}));