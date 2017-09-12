/**
 * Created by user on 12.09.2017.
 */
'use strict';

var i = 1;
var message;

for (;i<101;i++)
{
    message = '';

    message = ( (i%3 == 0) && (i%5 == 0) ) ? ( message += 'FizzBuzz' ) : (i%3 == 0) ? ( message += 'Fizz') : (i%5 == 0) ? ( message += 'Buzz' ) :  message = i;

    console.log (i, message);

}
