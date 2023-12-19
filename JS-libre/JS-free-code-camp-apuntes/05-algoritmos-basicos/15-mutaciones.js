/*  Mutaciones
--------------
    Devuelve true si la cadena de caracteres en el primer 
    elemento del arreglo contiene todas las letras de la 
    cadena en el segundo elemento del arreglo.

    Por ejemplo, ["hello", "Hello"], debe devolver true 
    porque todas las letras de la segunda cadena están 
    presentes en la primera, ignorando mayúsculas o 
    minúsculas.

    Los argumentos ["hello", "hey"] deben devolver false 
    porque la cadena hello no contiene y.

    Finalmente, ["Alien", "line"], debe devolver true 
    porque todas las letras de line están presentes 
    en Alien.
*/

function mutation(arr) {
  let target = arr[0].toLowerCase();
  let test = arr[1].toLowerCase();
  for(let i=0; i < test.length; i++){
    if(target.indexOf(test[i]) < 0) return false
  }
  return true;
}

console.log(mutation(["hello", "hey"]));
console.log(mutation(["hello", "Hello"]));
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(mutation(["Mary", "Army"]));
console.log(mutation(["Mary", "Aarmy"]));
console.log(mutation(["Alien", "line"]));
console.log(mutation(["floor", "for"]));
console.log(mutation(["hello", "neo"]));
console.log(mutation(["voodoo", "no"]));
console.log(mutation(["ate", "date"]));
console.log(mutation(["Tiger", "Zebra"]));
console.log(mutation(["Noel", "Ole"]));