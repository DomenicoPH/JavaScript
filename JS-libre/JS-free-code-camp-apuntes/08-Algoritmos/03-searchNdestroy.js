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
  const toRemove = Object.values(arguments).slice(1)
  const myArr = []
  for(let i=0; i < arr.length; i++){
    let removeElement = false
    for(let j = 0; j < toRemove.length; j++){
      if(arr[i] === toRemove[j]){
        removeElement = true
      }
    }
    if(!removeElement){
      myArr.push(arr[i])
    }
  }
  return myArr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3))
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5))
console.log(destroyer([2, 3, 2, 3], 2, 3))
console.log(destroyer(["tree", "hamburger", 53], "tree", 53))
console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"))