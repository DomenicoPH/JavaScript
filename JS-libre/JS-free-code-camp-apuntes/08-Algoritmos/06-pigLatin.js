//  Pig Latin (Latin de los cerdos)

/*
    Pig Latin (latin de los cerdos) es una manera de alterar las palabras en inglés. 
    Las normas son las siguientes:

    - Si una palabra comienza con una consonante, toma la primer consonante o grupo 
      de consonantes, muévela al final de la palabra, y añade ay a ella.

    - Si una palabra comienza con una vocal, solo añade way al final.

    Traduce la cadena proporcionada a Pig Latin. Las cadenas de entrada están 
    garantizadas como palabras en inglés en minúsculas.
*/

// Solución 1:

function translatePigLatin(str) {
  return str
  .replace(/^[aeiou]\w*/, "$&way") // Si la palabra comienza con una vocal, añade "way" al final
  .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay") // Si la palabra comienza con una o más consonantes, muévelas al final y añade "ay"
};

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("california"));
console.log(translatePigLatin("paragraphs"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("eight"));
console.log(translatePigLatin("schwartz"));
console.log(translatePigLatin("rhythm"));

// Expresión Regular: /^[aeiou]\w*/

/*  ^: Coincide con el inicio de la cadena.
    [aeiou]: Coincide con cualquier vocal.
    \w*: Coincide con cero o más caracteres de palabra (letras, dígitos o guiones bajos).
    
    Esta expresión se utiliza para verificar si la palabra comienza con una vocal 
    y capturar esa vocal y el resto de la palabra.
*/

// Expresión Regular: /(^[^aeiou]+)(\w*)/

/*  (^[^aeiou]+): Captura uno o más caracteres al principio de la cadena que no son vocales.
    (\w*): Captura cero o más caracteres de palabra después de las consonantes iniciales.
    
    Esta expresión se utiliza para manejar palabras que comienzan con una o más consonantes. 
    Divide la palabra en dos partes: las consonantes iniciales y el resto de la palabra.
*/

/*  .replace()

    -> El primer parámetro es la expresión regular que se debe buscar y reemplazar.

    -> El segundo parámetro es la cadena que se debe usar para el reemplazo. 
        En este caso, se utilizan referencias de grupo como $&, $1, y $2:
    -> $&: Representa toda la coincidencia.

    -> $1: Representa el primer grupo capturado (las consonantes iniciales 
        en la segunda expresión regular).

    -> $2: Representa el segundo grupo capturado (el resto de la palabra 
        en la segunda expresión regular).
*/


// Solución 2:

function translatePigLatin2(str){
    let consonantRegex = /^[^aeiou]+/               // 1. Definir una expresión regular que busca una o más consonantes al principio de la cadena.
    let myConsonants = str.match(consonantRegex)    // 2. Utilizar la expresión regular para buscar las consonantes iniciales en la cadena.
    return myConsonants !== null                    // 3. Verificar si se encontraron consonantes iniciales.
    ? str                                           // 4. Si hay consonantes iniciales, reorganizar la cadena según las reglas de Pig Latin.
        .replace(consonantRegex, "")                // Eliminar las consonantes iniciales de la cadena.
        .concat(myConsonants)                       // Concatenar las consonantes iniciales al final de la cadena.
        .concat('ay')                               // Agregar 'ay' al final de la cadena.
    : str                                           
        .concat('way')                              // 5. Si no hay consonantes iniciales, simplemente agregar 'way' al final de la cadena.
};

console.log(translatePigLatin2("consonant"));
console.log(translatePigLatin2("california"));
console.log(translatePigLatin2("paragraphs"));
console.log(translatePigLatin2("glove"));
console.log(translatePigLatin2("algorithm"));
console.log(translatePigLatin2("eight"));
console.log(translatePigLatin2("schwartz"));
console.log(translatePigLatin2("rhythm"));

/*
    La expresión regular /^[^aeiou]+/ se utiliza para buscar una o más consonantes 
    al principio de una cadena:

    ^: Indica que la coincidencia debe estar al principio de la cadena.

    [^aeiou]: Representa una clase de caracteres negada, lo que significa 
              que coincide con cualquier carácter que no sea una vocal. 
              En este caso, coincide con cualquier consonante.

    +: Indica que debe haber uno o más de los caracteres especificados en la 
        clase de caracteres negada.
*/


// Solución 3:

function translatePigLatin3(str){
    var pigLatin = ""                                       // Inicializa una variable para almacenar la palabra convertida a Pig Latin
    var regex = /[aeiou]/gi                                 // Crea una expresión regular para buscar vocales (ignorando mayúsculas o minúsculas)
    if(str[0].match(regex)){                                // Verifica si la primera letra es una vocal
        pigLatin = str + 'way'                              // Si es una vocal, agrega 'way' al final de la palabra
    } else if(str.match(regex) === null){                   // Verifica si la palabra no contiene vocales
        pigLatin = str + 'ay'                               // Si no contiene vocales, agrega 'ay' al final de la palabra
    } else {
        var vocalIndex = str.indexOf(str.match(regex)[0])                       // Encuentra el índice de la primera vocal
        pigLatin = str.substr(vocalIndex) + str.substr(0, vocalIndex) + 'ay'    // Reorganiza la palabra según las reglas de Pig Latin
    }
    return pigLatin                                         // Devuelve la palabra convertida a Pig Latin
};

console.log(translatePigLatin3("consonant"));
console.log(translatePigLatin3("california"));
console.log(translatePigLatin3("paragraphs"));
console.log(translatePigLatin3("glove"));
console.log(translatePigLatin3("algorithm"));
console.log(translatePigLatin3("eight"));
console.log(translatePigLatin3("schwartz"));
console.log(translatePigLatin3("rhythm"));

/*  La expresión regular /[aeiou]/gi se utiliza para buscar vocales 
    en una cadena de texto:

    /: Delimitador de inicio de la expresión regular.

    [aeiou]: Conjunto de caracteres que representa una vocal. 
             Cualquier carácter dentro de los corchetes se 
             considera una coincidencia si es una vocal 
             (a, e, i, o, u).

    /: Delimitador de cierre del conjunto de caracteres y de final 
       de la expresión regular.

    g: Modificador global. Busca todas las coincidencias en lugar 
       de detenerse después de encontrar la primera.

    i: Modificador de insensibilidad a mayúsculas y minúsculas. 
       Hace que la búsqueda sea insensible a las diferencias de 
       mayúsculas y minúsculas.
*/