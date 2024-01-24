//  Busca y destruye

/*
    Se te proporcionará un arreglo inicial como primer argumento de la función destroyer, 
    seguido de uno o más argumentos. Elimina todos los elementos del arreglo inicial que 
    tengan el mismo valor que estos argumentos.

    La function debe aceptar un número indeterminado de argumentos, también conocida como 
    función variádica. Puedes acceder a los argumentos adicionales añadiendo un parámetro 
    restante a la definición de la función o utilizando el objeto arguments.
*/

function destroyer(arr) {
  const toRemove = Object.values(arguments).slice(1)      // Almacena los valores a eliminar a partir del segundo argumento en un array llamado toRemove
  const myArr = []                                        // Crea un nuevo array llamado myArr para almacenar los elementos filtrados
  for(let i=0; i < arr.length; i++){                      // Itera sobre cada elemento del array original arr
    let removeElement = false                             // Inicializa una variable removeElement en false para rastrear si se debe eliminar el elemento actual
    for(let j = 0; j < toRemove.length; j++){             // Itera sobre los valores a eliminar almacenados en el array toRemove
      if(arr[i] === toRemove[j]){                         // Compara el elemento actual de arr con el valor a eliminar
        removeElement = true                              // Si hay una coincidencia, establece removeElement en true
      }
    }
    if(!removeElement){                                   // Si removeElement es false, agrega el elemento actual al nuevo array myArr
      myArr.push(arr[i])
    }
  }
  return myArr;                                           // Devuelve el nuevo array myArr que contiene los elementos filtrados
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3))
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5))
console.log(destroyer([2, 3, 2, 3], 2, 3))
console.log(destroyer(["tree", "hamburger", 53], "tree", 53))
console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"))