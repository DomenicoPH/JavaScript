/*  Recorta una cadena
----------------------
    Recorta una cadena (primer argumento) si es más larga que la 
    longitud máxima proporcionada (segundo argumento). 
    Devuelve la cadena recortada con un ... al final.
*/

function truncateString(str, num) {
  if(str.length > num){
    return str.slice(0,num) + '...'
  } else {
    return str
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("We are the champions, my friend", 10));
console.log(truncateString("El burro hablando de orejas", 30));