/*  Invierte un string
----------------------
    Invertir la cadena proporcionada y devolver la cadena invertida.
    Por ejemplo, "hello" debe convertirse "olleh".
*/

function reverseString(str) {
  console.log(str.split('').reverse().join(''))
  return str.split('').reverse().join('');
}

reverseString("hello");
reverseString("what are you doing?");
reverseString("del revés");

//Espejo | ojepsE
console.log(reverseString("mirror string"), '| mirror string')