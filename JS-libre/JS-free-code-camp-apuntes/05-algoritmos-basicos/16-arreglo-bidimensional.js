/*  Chunky Monkey (arreglos bidimensionales)
--------------------------------------------
    Escribe una función que divida un arreglo (primer argumento) 
    en grupos de la longitud size (segundo argumento) y los 
    devuelva como un arreglo bidimensional.
*/

function chunkArrayInGroups(arr, size) {
    let temp = [];
    let result = [];
    for(let i=0; i < arr.length; i++){
        if(i % size !== size - 1) temp.push(arr[i])
        else {
            temp.push(arr[i])
            result.push(temp)
            temp = []
        }
    }
    if(temp.length !== 0) result.push(temp)
    return result;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2))
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3))
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2))
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4))
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3))
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4))
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2))