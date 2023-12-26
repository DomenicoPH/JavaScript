// Comprende las funciones que son invocadas inmediatamente (IIFE)

/*
    Un patrón común en JavaScript es la ejecución 
    de una función apenas declarada:
*/

(function () {
  console.log("Chirp, chirp!");
})();

/*
    Esta es una expresión de función anónima que se ejecuta 
    de inmediato y produce Chirp, chirp! inmediatamente.

    Ten en cuenta que la función no tiene nombre y que no se 
    almacena en un valor. Los dos paréntesis () al final de 
    la expresión de la función hacen que se ejecute o 
    invoque de forma inmediata. Este patrón se conoce 
    como una expresión de función inmediatamente invocada 
    o IIFE (por sus siglas en inglés.
*/

/*
    Reescribe la función makeNest y elimina su llamada, 
    por lo que es una expresión de función anónima 
    inmediatamente invocada (IIFE).
*/

(function () {
  console.log("A cozy nest is ready");
})()