//  Implementa map en un prototipo

/*
    Como has visto anteriormente, al aplicar Array.prototype.map(), 
    o simplemente map(), el método map devuelve un arreglo de la misma
    longitud que el arreglo dentro del que fue llamado. Esto tampoco 
    altera el arreglo original, siempre y cuando su función callback 
    no lo haga.

    En otras palabras, map es una función pura, y su salida depende 
    únicamente de sus entradas. Además, toma otra función como argumento.

    Puedes aprender mucho sobre el método map si implementas tu propia 
    versión. Se recomienda utilizar un bucle for o Array.prototype.forEach().
*/

/*
    Escribe tu propio Array.prototype.myMap(), el cual debe comportarse 
    exactamente como Array.prototype.map(). No debes utilizar el método 
    incorporado map. Se puede acceder a la instancia de Array en el 
    método myMap usando this.
*/

/* --------------------------------------------------------------------------------- */
Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Cambia solo el código debajo de esta línea

  // Este bucle itera sobre cada elemento del array al que se aplica el método myMap.
  // La función de callback proporcionada se ejecuta en cada elemento del array.
  // callback toma tres argumentos: el valor del elemento actual, su índice y el array original.

  for(let i=0; i < this.length; i++){
    newArray.push(callback(this[i], i, this))   // Ejecuta la función de callback en el elemento actual y añade el resultado al nuevo array.
  }

  // Cambia solo el código encima de esta línea
  return newArray;  // Devuelve el nuevo array con los resultados de aplicar la función de callback a cada elemento del array original.
};