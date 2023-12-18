/*  Boo Who
-----------
    Comprueba si el valor está clasificado como booleano primitivo. 
    Devuelve true o false.
    Booleanos primitivos son true y false.
*/

function booWho(bool) {
  return bool === true || bool === false;
}

console.log(booWho(null));
console.log(booWho(true));
console.log(booWho(false));
console.log(booWho(36));
console.log(booWho('abc'));