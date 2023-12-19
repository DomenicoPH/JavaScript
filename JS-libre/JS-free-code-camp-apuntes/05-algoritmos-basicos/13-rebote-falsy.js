/*  Rebote falsy
----------------
    Elimina todos los valores falsos de un arreglo. Devuelve un nuevo arreglo; no alteres el arreglo original.
    Los valores falsos (falsy) en JavaScript son: false, null, 0, "", undefined y NaN.
    Sugerencia: Intenta convertir cada valor a booleano.
*/

function bouncer(arr) {
  let newArr = []
  for(let i=0; i < arr.length; i++){
    if(arr[i]) newArr.push(arr[i])
  }
  return newArr;
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer(["a", "b", "c"]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
console.log(bouncer([null, NaN, 1, 2, undefined]));