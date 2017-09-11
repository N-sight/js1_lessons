'use strict';

var j = 1;

for (;j<101;j++)
{

    if (j%3 == 0)
    {
        console.log ('Fizz');
    }
    else if ( (j%5 == 0 ) )
    {
        console.log ('Buzz');
    }
    else
    {
        console.log(j);
    }

}

/// вторая часть



console.log ('Вторая часть с кратными 15 числами');

var i = 1;
var message;

for (;i<101;i++)
{
    message = '';

    if ( (i%3 == 0) && (i%5 == 0) )
    {
        message += 'FizzBuzz';
    }
    else if ( (i%3 == 0) )
    {
         message += 'Fizz';
    }
    else if ( (i%5 == 0) )
    {
        message += 'Buzz';
    }
    else {
     message = i;
    }

    console.log (i, message);

}


