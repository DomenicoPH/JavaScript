//  Pasa argumentos para evitar la dependencia externa en una función

/*
    El último reto fue un paso más cerca de los principios de la 
    programación funcional, pero todavía falta algo.

    No alteramos el valor global de la variable, pero la función 
    incrementer no funcionaría sin que la variable global 
    fixedValue estuviera allí.

    Otro principio de programación funcional es declarar siempre 
    sus dependencias de forma explícita. Esto significa si una 
    función depende de que una variable u objeto esté presente, 
    después pasa esa variable u objeto directamente a la función 
    como argumento.

    Este principio tiene varias consecuencias positivas. La función 
    es más fácil de probar, se sabe exactamente lo que necesita, 
    y no dependerá de nada más en tu programa.

    Esto puede darte más confianza cuando cambias, eliminas o 
    agregas código nuevo. Sabrás lo que se puede o no se puede 
    cambiar y, puedes ver dónde están los posibles trampas.

    Finalmente, la función siempre produciría el mismo resultado 
    para el mismo conjunto de entradas, sin importar qué parte 
    del código la ejecute.
*/

/*
    Actualicemos la función incrementer para declarar claramente 
    sus dependencias.

    Escribe la función incrementer para que reciba un argumento, y 
    luego devuelva un resultado después de aumentar el valor en uno.
*/

/* --------------------------------------------------------------------------------- */
// La variable global
let fixedValue = 4;

// Cambia solo el código debajo de esta línea
function incrementer(value) {
  return value + 1
  // Cambia solo el código encima de esta línea
}