/**
 * Created by user on 19.09.2017.
 */

'use strict';

function countBs (str)
{
    var i=0,j=0;
    do{
        if ( str.charAt(i) === 'B')
        {
            j++
        }
        i++
    }while (i<str.length);

    return j;
}

function countChar( string,hook )
{
    var i=0,j=0;
    do{
        if ( string.charAt(i) == hook )
        {
            j++
        }
        i++
    }while (i<string.length);

    return j;
}


console.log ( countBs( '77djjBwswuBww188vB1=NB8wb' ) ); //4
console.log ( countChar( '77djjBwswuBww188vB1=NB8wb','w') ); //5
