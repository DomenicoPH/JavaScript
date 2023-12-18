/*  Factoriza un número
-----------------------
    Devuelve el factorial del entero proporcionado.

    Si el número entero es representado con la letra n, un factorial 
    es el producto de todos los enteros positivos menores o iguales a n.

    Los factoriales suelen representarse con la abreviatura n!

    Por ejemplo: 5! = 1 * 2 * 3 * 4 * 5 = 120

    Sólo se proporcionarán a la función los enteros mayores o iguales a cero.
*/

function factorialize(num) {
    let factorial = 1;
    for(let i=num; i > 0; i--){
      factorial *= i
    }
    console.log(factorial)
    return factorial;
  }
  
  factorialize(2);  // 2! = 1 * 2
  factorialize(4);  // 4! = 1 * 2 * 3 * 4 
  factorialize(5);  // 5! = 1 * 2 * 3 * 4 * 5 
  factorialize(9);  // 9! = 1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9