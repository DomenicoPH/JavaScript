/*  Confirma el final
---------------------
    Evalúa si una cadena (primer argumento, str) termina con 
    la cadena de destino dada (segundo argumento, target).

    Este desafío puede resolverse con el método .endsWith(), 
    que fue introducido en ES2015. Pero para el propósito de 
    este desafío, nos gustaría que usaras uno de los métodos 
    de subcadena de JavaScript en su lugar.
*/

function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target
}

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("The final days of the bat", "at"));
console.log(confirmEnding("esternocleidomastoideo", "mastoideo"));

console.log(confirmEnding("Bastian", "r"));
console.log(confirmEnding("The final days of the bat", "ul"));
console.log(confirmEnding("esternocleidomastoideo", "abuelo"));


/* Versión corta con .endsWith() */ console.log('--------------')
function confirmEndingShort(str, target) {
  return str.endsWith(target)
}

console.log(confirmEndingShort("Bastian", "n"));
console.log(confirmEndingShort("The final days of the bat", "at"));
console.log(confirmEndingShort("esternocleidomastoideo", "mastoideo"));

console.log(confirmEndingShort("Bastian", "r"));
console.log(confirmEndingShort("The final days of the bat", "ul"));
console.log(confirmEndingShort("esternocleidomastoideo", "abuelo"));