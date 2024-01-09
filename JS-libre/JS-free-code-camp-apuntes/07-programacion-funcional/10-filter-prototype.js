// Implementa el método filter en un prototipo

/*
    Puedes aprender mucho sobre el método filter si implementas tu propia versión. 
    Se recomienda utilizar un bucle for o Array.prototype.forEach().
*/

/*
    Escribe tu propio Array.prototype.myFilter(), que debe comportarse exactamente 
    como Array.prototype.filter(). No debes utilizar el método incorporado filter. 
    Se puede acceder a la instancia Array en el método myFilter usando this.
*/

/* --------------------------------------------------------------------------------- */

Array.prototype.myFilter = function(callback) {
    const newArray = [];
    // Cambia solo el código debajo de esta línea
      for(let i=0; i < this.length; i++){
        if(callback(this[i], i, this)){
          newArray.push(this[i])
        }
      }
    // Cambia solo el código encima de esta línea
    return newArray;
  };

// --- test ---
let test1 = [23, 65, 98, 5, 13].myFilter(item => item % 2)
console.log(test1);

let test2 = ["naomi", "quincy", "camperbot"].myFilter(element => element === "naomi")
console.log(test2);

let test3 = [1, 1, 2, 5, 2].myFilter((element, index, array) => array.indexOf(element) === index)
console.log(test3)

/*
    1. Array.prototype.myFilter = function(callback) {: 
        Se agrega un nuevo método llamado myFilter al prototipo del objeto Array, 
        lo que significa que este método estará disponible para todas las instancias de arrays.

    2. const newArray = [];: Se inicializa una nueva matriz vacía (newArray) que almacenará los 
        elementos que pasen la prueba proporcionada por la función callback.

    3. for (let i = 0; i < this.length; i++) {: Se inicia un bucle for que recorre cada elemento 
        del array actual (this).

    4. if (callback(this[i], i, this)) {: Para cada elemento en la posición i del array, se ejecuta 
        la función callback con tres argumentos:
        
        -> this[i]: El valor actual del elemento.
        -> i: El índice actual del elemento en el array.
        -> this: El array en sí mismo.
        
        La función callback debería devolver true o false basándose en alguna condición lógica. 
        Si la función callback devuelve true para un elemento en particular, se ejecuta el siguiente 
        bloque de código.

    5. newArray.push(this[i]);: Si la función callback devuelve true para el elemento en la posición i, 
        ese elemento se agrega al newArray utilizando el método push().

    6. return newArray;: Una vez que se han revisado todos los elementos del array actual y se han 
        agregado los elementos que pasan la prueba al newArray, se devuelve el newArray que contiene 
        solo los elementos que cumplen con la condición proporcionada por la función callback.
*/