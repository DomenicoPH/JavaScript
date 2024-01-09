// Devolver parte de un arreglo mediante el método slice

/*
    El método slice devuelve una copia de ciertos elementos de un arreglo. 
    Puede tomar dos argumentos, el primero da el índice de dónde comenzar el 
    corte, el segundo es el índice de dónde terminar el corte (y no es inclusivo). 
    Si no se proporcionan los argumentos, el valor predeterminado es comenzar 
    desde el principio del arreglo hasta el final, la cual es una manera fácil 
    de hacer una copia de todo el arreglo. 
    El método slice no muta el arreglo original, pero devuelve uno nuevo.
*/

const arr = ["Cat", "Dog", "Tiger", "Zebra"];
const newArray = arr.slice(1, 3);

console.log(arr)
console.log(newArray)

/*
    Utiliza el método slice en la función sliceArray para retornar parte del 
    arreglo anim dados los índices beginSlice y endSlice. La función debe 
    devolver un arreglo.
*/

/* --------------------------------------------------------------------------------- */

function sliceArray(anim, beginSlice, endSlice) {
    // Cambia solo el código debajo de esta línea
      return anim.slice(beginSlice, endSlice)
    // Cambia solo el código encima de esta línea
  }
  
  const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
  sliceArray(inputAnim, 1, 3);

  // slices
  console.log(sliceArray(inputAnim, 1, 3))
  console.log(sliceArray(inputAnim, 0, 2))
  console.log(sliceArray(inputAnim, 3, 5))

  console.log(inputAnim)

// * SLICE saca tajadas sin modificar el array original