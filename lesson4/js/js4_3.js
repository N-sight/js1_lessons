/**
 * Created by user on 19.09.2017.
 */

'use strict';
var i;

function isEven(num) {

    if (num == 0) return true;
    else if (num == 1) return false;
    return isEven(num-2);
}

// при i<0 цикл рекурсии не остановится.

function isEven2(k)
{
    if (k<0) {k *=-1;} // берём от аргумента модуль

    if (k == 0) return true;
    else if (k == 1) return false;
    return isEven(k-2);
}

i=50;
console.log ('Число '+i+' '+isEven2(i));

i=-50;
console.log ('Число '+i+' '+isEven2(i));

i=-51;
console.log ('Число '+i+' '+isEven2(i));