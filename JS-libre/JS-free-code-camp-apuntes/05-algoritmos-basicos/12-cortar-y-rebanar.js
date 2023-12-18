/*  Cortar y Rebanar
--------------------
    Tienes dos arreglos y un índice.
    Copia cada elemento del primer arreglo en el segundo arreglo, en orden.
    Comienza insertando elementos en el índice n del segundo arreglo.
    Devuelve el arreglo resultante. Los arreglos de entrada deben permanecer 
    iguales luego de que se ejecute la función.
*/

function frankenSplice(arr1, arr2, n) {
  let arr3 = arr2.slice(); // Creamos una copia de arr2 para no modificarlo directamente
  for (let i = 0; i < arr1.length; i++) {
    arr3.splice(n, 0, arr1[i]); // Insertamos cada elemento de arr1 en la posición n
    n++; // Incrementamos n para insertar los elementos de arr1 en posiciones consecutivas
  }
  console.log(arr3);
  return arr3;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
console.log(frankenSplice([1, 2], ["a", "b"], 1));
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
console.log(frankenSplice([1, 2, 3, 4], [], 0));