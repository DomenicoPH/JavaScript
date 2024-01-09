// Combina dos arreglos utilizando el método "concat"

/*
    Concatenation significa unir elementos de extremo a extremo. 
    JavaScript ofrece el método concat para cadenas y arreglos, 
    que funciona de la misma manera. Para arreglos, el método es 
    llamado desde un arreglo, un segundo arreglo es proporcionado 
    como argumento de concat, este se añadirá al final del primer 
    arreglo. 
    Devuelve un nuevo arreglo, sin mutar ninguno de los arreglos 
    originales. 
    
    Aquí hay un ejemplo:
*/

[1, 2, 3].concat([4, 5, 6]);
console.log([1, 2, 3].concat([4, 5, 6]))

/*
    Usa el método concat en la función nonMutatingConcat para 
    concatenar attach al final de original. 
    La función deber devolver el arreglo concatenado.
*/

/* --------------------------------------------------------------------------------- */

function nonMutatingConcat(original, attach) {
  // Cambia solo el código debajo de esta línea
    return original.concat(attach)
  // Cambia solo el código encima de esta línea
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingConcat(first, second);
console.log(nonMutatingConcat(first, second))

const nombre = 'Domenico'
const apellidos = 'Pagano Hildebrandt'
const nombreCopleto = 'Nombre Completo: '.concat(nombre.concat(' '.concat(apellidos)))
console.log(nombreCopleto)