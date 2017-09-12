/**
 * Created by user on 12.09.2017.
 */
'use strict';

var i,j;

for (i=1;i<9;i++) // строки
{
    for (j=1;j<9;j++) // cтолбцы
    {
        if ( (i%2 !=0) && (j%2 !=0) )
        {
            document.write ('&nbsp');
        }
        else if (( (i%2 !=0) && (j%2 ==0) ) )
        {
            document.write ('#');
        }
        else if (( (i%2 ==0) && (j%2 !=0) ) )
        {
            document.write ('#');
        }
        else
        {
            document.write ('&nbsp');
        }
    }
    document.writeln ('\n'); // эта штука не работает даже с регуляркой.
    document.write ('<br>');
}