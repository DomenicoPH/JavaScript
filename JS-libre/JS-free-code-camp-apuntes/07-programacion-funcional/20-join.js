//  Combina un arreglo en una cadena utilizando el método "join"

/*
    El método join se utiliza para unir los elementos de un arreglo 
    creando una cadena de texto. Se necesita un argumento para 
    especificar el delimitador a utilizar para separar los 
    elementos del arreglo en la cadena.

    Aquí hay un ejemplo:
*/

const arr = ["Hello", "World"];
const str = arr.join(" ");
    console.log(str)

//  str tendrá una cadena con valor Hello World.

/*
    Utiliza el método join (entre otros) dentro de la función sentensify 
    para hacer una oración a partir de las palabras en la cadena str. 
    La función debe devolver una cadena. 
    Por ejemplo, I-like-Star-Wars se convertiría en I like Star Wars. 
    Para este desafío, no utilices el método replace.
*/

/* --------------------------------------------------------------------------------- */

function sentensify(str) {
  // Cambia solo el código debajo de esta línea
  let splitted = str.split(/[^A-Za-z0-9_]/)
  let quote = splitted.join(' ')
  return quote
  // Cambia solo el código encima de esta línea
}

console.log(sentensify("May-the-force-be-with-you"));
console.log(sentensify("The.force.is.strong.with.this.one"))
console.log(sentensify("There,has,been,an,awakening"))


/*
    /[^A-Za-z0-9_]/
    
    La expresión regular /[^A-Za-z0-9_]/ representa un patrón que coincide con 
    cualquier carácter que no sea una letra mayúscula o minúscula (A-Z o a-z), 
    un dígito del 0 al 9 o un guión bajo _. 
    
    El ^ dentro de los corchetes invertidos [^...] indica la negación del 
    conjunto de caracteres que sigue a continuación.
    
    En resumen, esta expresión regular busca coincidencias con cualquier carácter 
    que no sea una letra (mayúscula o minúscula), un número o un guión bajo.
*/