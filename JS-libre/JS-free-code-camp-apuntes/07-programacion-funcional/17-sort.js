// Ordena un arreglo alfabéticamente con el método sort

/*
    El método sort ordena los elementos de un arreglo de 
    acuerdo a la función callback.

    Por ejemplo:
*/

function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}

ascendingOrder([1, 5, 2, 3, 4]);
console.log(ascendingOrder([1, 5, 2, 3, 4]))
// Esto devolvería el valor de [1, 2, 3, 4, 5].

//...

function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}

function orderAlpha(arr) {
    return arr.sort(function(a, b) {
      return a === b ? 0 : a > b ? 1 : -1;
    });
  }

reverseAlpha(['l', 'h', 'z', 'b', 's']);
console.log(reverseAlpha(['l', 'h', 'z', 'b', 's']))
// Esto devolvería el valor de ['z', 's', 'l', 'h', 'b'].

console.log(orderAlpha(['g', 'e', 'a', 'h', 'f', 'c', 'd', 'b',]))
console.log(reverseAlpha(['g', 'e', 'a', 'h', 'f', 'c', 'd', 'b',]))

/*
    Por defecto, JavaScript ordena basándose en el valor "Unicode" de la cadena de caracteres, 
    lo cual puede dar resultados inesperados. Por lo tanto, se recomienda proporcionar una 
    función callback para especificar como se deben ordenar los elementos del arreglo. 
    Cuando se proporciona dicha función callback, normalmente llamada compareFunction, los 
    elementos del arreglo se ordenan de acuerdo al valor que devuelve la función 
    compareFunction: Si compareFunction(a,b) devuelve un valor menor que 0 para dos 
    elementos a y b, entonces a irá antes que b. Si compareFunction(a,b) devuelve un 
    valor mayor a 0 para dos elementos a y b, entonces b irá antes que a. 
    Si compareFunction(a,b) devuelve un valor igual a 0 para dos elementos a y b, 
    entonces a y b se dejarán sin cambios.
*/

/*
    Utiliza el método sort en la función alphabeticalOrder para ordenar los elementos 
    de arr en orden alfabético. La función debe devolver el arreglo ordenado.
*/

/* --------------------------------------------------------------------------------- */

function alphabeticalOrder(arr) {
  // Cambia solo el código debajo de esta línea
  return arr.sort((a,b) => {
    return a === b ? 0 : a > b ? 1 : -1
  })
  // Cambia solo el código encima de esta línea
}

console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));