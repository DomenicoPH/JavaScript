/*  Retorna el primer TRUE
--------------------------
    Crea una función que recorra un arreglo arr y devuelva el primer elemento 
    que pase un "detector de verdad". Esto significa que dado un elemento x, 
    el "detector de verdad" es pasado si func(x) es true. Si ningún elemento 
    pasa la prueba la función debería devolver undefined.
*/

function findElement(arr, func) {
  for(let i=0; i < arr.length; i++){
    if(func(arr[i])) return arr[i]
  }
  return undefined;
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0))
console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }))
console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }))


/* Versión corta con .find() */ console.log('--------------')
function findElementShort(arr, func) {
  return arr.find(func);
}

console.log(findElementShort([1, 2, 3, 4], num => num % 2 === 0))
console.log(findElementShort([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }))
console.log(findElementShort([1, 3, 5, 9], function(num) { return num % 2 === 0; }))