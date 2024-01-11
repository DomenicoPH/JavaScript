//  Usa el método "some" para comprobar si algún elemento en un arreglo cumple un criterio

/*
    El método some funciona con arreglos para comprobar si algún elemento pasa una prueba 
    en particular. Devuelve un valor booleano true si alguno de los valores cumple el criterio, 
    false si no.

    Por ejemplo, el siguiente código comprobará si algún elemento en el arreglo numbers es 
    menor que 10:
*/

const numbers = [10, 50, 8, 220, 110, 11];

numbers.some(function(currentValue) {
  return currentValue < 10;
});

console.log(numbers.some(function(currentValue) { return currentValue < 10 }))

// El método some devolverá true.

/*
    Utiliza el método some dentro de la función checkPositive para comprobar si algún 
    elemento en arr es positivo. La función debe devolver un valor booleano.
*/

/* --------------------------------------------------------------------------------- */

function checkPositive(arr) {
  // Cambia solo el código debajo de esta línea
    return arr.some((element) => element >= 0)
  // Cambia solo el código encima de esta línea
}

checkPositive([1, 2, 3, -4, 5]);
console.log(checkPositive([1, 2, 3, -4, 5]))