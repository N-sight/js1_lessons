/**
 * Created by user on 19.09.2017.
 */

'use strict';

var test=658;
function num2object(num)
{
    var result = {},str;

    if ( (num>999) || (num <0) )
    {
        console.log ('Принимаем аргументы от 0 до 999');
        return false;
    }
    console.log (num);
    str = num.toString(10);


    if (str.length == 1) { str ='00'+str;}
    else if (str.length == 2)
    {
        str ='0'+str;
    }

    result['сотни'] = str[0];
    result['десятки'] = str[1];
    result['еденицы'] = str[2];


    return result;
}

console.log (num2object(test));