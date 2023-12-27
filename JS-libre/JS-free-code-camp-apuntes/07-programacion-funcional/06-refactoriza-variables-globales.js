//  Refactoriza variables globales por fuera de funciones

/*
    Hasta ahora, hemos visto dos principios distintos para 
    la programación funcional:

    1.  No alteres una variable u objeto: crea nuevas variables 
        y objetos y devuélvelos, si es necesario, desde una función. 
        Pista: usar algo como const newArr = arrVar, donde arrVar es 
        un arreglo, simplemente creará una referencia a la variable 
        existente y no una copia. Así que cambiar un valor en newArr 
        cambiaría el valor en arrVar.

    2.  Declara parámetros de función: cualquier cálculo dentro de 
        una función depende sólo de los argumentos pasados a la 
        función y no en ningún objeto o variable global.

    Añadir uno a un número no es muy emocionante, pero podemos 
    aplicar estos principios cuando trabajamos con arreglos u 
    objetos más complejos.
*/

/*
    Reescribe el código para que el arreglo global bookList no sea 
    cambiado dentro de ninguna de las funciones. 
    
    La función add debe agregar el bookName dado al final del arreglo 
    pasado a esta y devolver un nuevo arreglo (lista). 
    
    La función remove debe eliminar el bookName dado del arreglo 
    pasado a esta.

    Nota: ambas funciones deben devolver un arreglo y cualquier nuevo 
    parámetro debe ser añadido antes del parámetro bookName.
*/

/* --------------------------------------------------------------------------------- */
// La variable global
const bookList = [
    "The Hound of the Baskervilles", 
    "On The Electrodynamics of Moving Bodies", 
    "Philosophiæ Naturalis Principia Mathematica", 
    "Disquisitiones Arithmeticae"
];

// Cambia el código debajo de esta línea

function add(arr,bookName) {
  let myBookList = [...arr]     // Crea un nuevo array y guarda en su interior todo lo que contenga el array pasado como primer parámetro.
  myBookList.push(bookName);    // Push del segundo parámetro en el array recién creado (myBookList).
  return myBookList;            // Retorna el nuevo array.

  // Cambia el código encima de esta línea
}

// Cambia el código debajo de esta línea

function remove(arr,bookName) {
  let myBookList = [...arr]     // Crea un nuevo array y guarda en su interior todo lo que contenga el array pasado como primer parámetro.
  if (myBookList.indexOf(bookName) >= 0) {  // Comprueba si el libro (bookName) está presente en el array (myBookList).
    myBookList.splice(myBookList.indexOf(bookName), 1); // Si el libro está presente, utiliza splice para eliminar un elemento en la posición del libro encontrado.
    return myBookList;  // Retorna el array modificado sin el libro eliminado.
    }
    // Si el libro no está en el array, no se ejecuta la operación de eliminación y la función no devuelve nada (undefined).
}

// Cambia el código encima de esta línea

// Testing
console.log(bookList)

console.log(add(bookList,'El quijote desmanchado'))
console.log(add(bookList,'Las pesadillas horrorosas de Warner Broster'))

console.log(bookList)