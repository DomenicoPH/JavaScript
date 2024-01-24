//  Busca y reemplaza

/*  Realiza una búsqueda y reemplaza en la oración usando los argumentos 
    proporcionados y devuelve la nueva oración.

    El primer argumento es la frase sobre la que se va a realizar la 
    búsqueda y el reemplazo.

    El segundo argumento es la palabra que se reemplazará (antes).

    El tercer argumento es lo que reemplazará el segundo argumento (después).

    Note: Mantén la capitalización del primer carácter en la palabra original 
    cuando lo estés reemplazando. Por ejemplo, si quieres reemplazar la palabra 
    Book por la palabra dog, debe ser reemplazada como Dog
*/

// Solución 1:

function myReplace(str, before, after) {
  var index = str.indexOf(before)                                   // Encuentra la posición de la subcadena 'before' en la cadena principal 'str'
  if(str[index] === str[index].toUpperCase()){                      // Verifica si la letra en la posición 'index' de 'before' está en mayúsculas
    after = after.charAt(0).toUpperCase() + after.slice(1)          // Si 'before' está en mayúsculas, convierte la primera letra de 'after' a mayúscula
  } else {
    after = after.charAt(0).toLowerCase() + after.slice(1)          // Si 'before' está en minúsculas, convierte la primera letra de 'after' a minúscula
  }
  str = str.replace(before,after)                                   // Reemplaza la subcadena 'before' con la cadena modificada 'after' en 'str'
  return str;                                                       // Devuelve la cadena modificada
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"))
console.log(myReplace("Let us go to the store", "store", "mall"))
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"))
console.log(myReplace("I think we should look up there", "up", "Down"))
console.log(myReplace("This has a spellngi error", "spellngi", "spelling"))
console.log(myReplace("His name is Tom", "Tom", "john"))
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"))

/*
    1. var index = str.indexOf(before): 
    Encuentra la posición de la subcadena before en la cadena str 
    y almacena el índice en la variable index.

    2. if (str[index] === str[index].toUpperCase()) {: 
    Verifica si la primera letra de la subcadena before está en 
    mayúsculas.

        2.1. Si es verdad, significa que la primera letra de before 
        está en mayúsculas, por lo que se capitaliza la primera letra 
        de after usando after.charAt(0).toUpperCase() + after.slice(1).

        2.2. Si es falso, significa que la primera letra de before 
        está en minúsculas, por lo que se convierte la primera letra 
        de after a minúscula usando after.charAt(0).toLowerCase() + after.slice(1).

    3. str = str.replace(before, after);: 
    Realiza el reemplazo de la subcadena before con la cadena modificada after 
    en la cadena original str.

    4. return str;: Retorna la cadena modificada después de realizar el reemplazo.

        En resumen, este algoritmo toma una cadena (str), 
        busca una subcadena específica (before), 
        y la reemplaza con otra cadena (after). 
        La lógica principal se centra en determinar la capitalización correcta para 
        la primera letra de la cadena de reemplazo after.
*/

// Solución 2:

function myReplace2(str, before, after){
    if(/^[A-Z]/.test(before)){                                      // Verifica si la primera letra de 'before' está en mayúsculas utilizando una expresión regular
        after = after[0].toUpperCase() + after.substring(1)         // Si 'before' está en mayúsculas, convierte la primera letra de 'after' a mayúscula
    } else {
        after = after[0].toLowerCase() + after.substring(1)         // Si 'before' está en minúsculas, convierte la primera letra de 'after' a minúscula
    }
    return str.replace(before, after)                               // Reemplaza la subcadena 'before' con la cadena modificada 'after' en 'str'
}

console.log(myReplace2("A quick brown fox jumped over the lazy dog", "jumped", "leaped"))
console.log(myReplace2("Let us go to the store", "store", "mall"))
console.log(myReplace2("He is Sleeping on the couch", "Sleeping", "sitting"))
console.log(myReplace2("I think we should look up there", "up", "Down"))
console.log(myReplace2("This has a spellngi error", "spellngi", "spelling"))
console.log(myReplace2("His name is Tom", "Tom", "john"))
console.log(myReplace2("Let us get back to more Coding", "Coding", "algorithms"))

/*
    1. if (/^[A-Z]/.test(before)) {: 
    Utiliza una expresión regular (/^[A-Z]/) para verificar si la primera 
    letra de la subcadena before está en mayúsculas.

    1.1.  Si es verdadero, significa que la primera letra de before está 
    en mayúsculas. En este caso, la primera letra de after se convierte a 
    mayúscula utilizando after[0].toUpperCase() + after.substring(1).

    1.2. Si es falso, significa que la primera letra de before está en 
    minúsculas. En este caso, la primera letra de after se convierte a 
    minúscula utilizando after[0].toLowerCase() + after.substring(1).

    2. return str.replace(before, after);: Realiza el reemplazo de la 
    subcadena before con la cadena modificada after en la cadena 
    original str.

        En resumen, este algoritmo también realiza la tarea de reemplazar 
        una subcadena (before) con otra cadena modificada (after) en la 
        cadena original (str). La diferencia radica en cómo determina la 
        capitalización de la primera letra de after, basándose en si la 
        primera letra de before está en mayúsculas o minúsculas.
*/