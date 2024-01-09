//  Devuelve un arreglo ordenado sin cambiar el arreglo original

/*
    Un efecto secundario del método sort es que cambia el orden de 
    los elementos en el arreglo original. En otras palabras, muta 
    el arreglo en su sitio. 
    Una forma de evitar esto es concatenar primero un arreglo vacío 
    al que está siendo ordenado (recuerda que slice y concat 
    devuelven un nuevo arreglo), luego ejecutar el método sort.

    Utiliza el método sort en la función nonMutatingSort para 
    ordenar los elementos de un arreglo en orden ascendente. 
    La función debe devolver un nuevo arreglo y no mutar la 
    variable globalArray.
*/

/* --------------------------------------------------------------------------------- */

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Cambia solo el código debajo de esta línea
  let newArr = arr.concat([])
  newArr.sort((a,b) => a - b)
  //console.log(newArr)
  return newArr
  // Cambia solo el código encima de esta línea
}

console.log(nonMutatingSort(globalArray))
console.log(nonMutatingSort([1, 30, 4, 21, 100000]))
console.log(nonMutatingSort([140000, 104, 99]))