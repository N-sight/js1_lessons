/**
 * Created by user on 12.09.2017.
 */
'use strict';

var i,j,message;

for (i=1;i<8;i++)
{
    j=i;
    message ='';
    do
    {
        message += '#';
        j--;
    }
    while (j>0);
    console.log(message);
}