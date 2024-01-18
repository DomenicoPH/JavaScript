//  Suma todos los números en un rango

/*
    Te pasaremos un arreglo de dos números. Devuelve la suma de estos dos números 
    más la suma de todos los números entre ellos. El número más bajo no siempre 
    será el primero.

    Por ejemplo, sumAll([4,1])> debe devolver 10 porque la suma de todos los números 
    entre 1 y 4 (ambos incluidos) es 10.
*/

function sumAll(arr) {
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  let sumBetween = 0;
  for(let i = min; i <= max; i++){
    sumBetween += i
  }
  return sumBetween
}

console.log(sumAll([1, 4]));
    /**/console.log(1 + 2 + 3 + 4) //1 + 2 + 3 + 4
console.log(sumAll([4, 10]));
    /**/console.log(4 + 5 + 6 + 7 + 8 + 9 + 10) //4 + 5 + 6 + 7 + 8 + 9 + 10

/*
    El algoritmo sumAll toma un array arr que contiene dos números y devuelve la 
    suma de todos los números en el rango entre esos dos números, inclusive.

    Explicación paso a paso:

    1.  Se utiliza Math.max() y Math.min() para determinar cuál de los dos números en 
        el array arr es el máximo (max) y cuál es el mínimo (min).

    2.  Se inicializa una variable sumBetween en 0. Esta variable se utilizará para 
        almacenar la suma de todos los números entre min y max.

    3.  Se utiliza un bucle for para iterar desde el número mínimo (min) hasta el 
        número máximo (max). En cada iteración, se suma el valor de i a sumBetween.

    4.  Finalmente, se devuelve el valor de sumBetween.

    En el ejemplo sumAll([1, 4]), min es 1, max es 4, y el bucle itera sobre los 
    números 1, 2, 3 y 4, sumándolos para obtener el resultado 10. Por lo tanto, 
    sumAll([1, 4]) devuelve 10.
*/