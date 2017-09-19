/**
 * Created by user on 19.09.2017.
 */

function getHex (r,g,b)
{
    if (r<0 || g<0 || b<0 || r>255 || g>255 || b>255) return false;

    r = r.toString(16);
    g = g.toString(16);
    b= b.toString(16);

    if (r.length <2) r =String(0)+r;
    if (g.length <2) g =String(0)+g;
    if (b.length <2) b =String(0)+b;
   return '#'+r+g+b;
   // return {r: r, g: g, b: b}

}

console.log (getHex(3,50,135));