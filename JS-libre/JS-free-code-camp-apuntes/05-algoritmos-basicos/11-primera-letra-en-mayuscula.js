/*  La primera en mayúscula
---------------------------
    Devuelve la cadena proporcionada con la primera letra de cada palabra en mayúsculas. 
    Asegúrate de que el resto de la palabra esté en minúsculas.
    Como propósito de este ejercicio, debes también usar mayúsculas conectando palabras como the y of.
*/

function titleCase(str) {
  let finalStr = str.toLowerCase().split(' '); // Convertir todo a minúsculas y dividir por palabras

  for (let i = 0; i < finalStr.length; i++) {
    finalStr[i] = finalStr[i][0].toUpperCase() + finalStr[i].slice(1); // Convertir la primera letra a mayúscula y el resto de la palabra a minúscula
  }
  return finalStr.join(' '); // Unir las palabras de nuevo en un string
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("we are in the search for the big one"));
console.log(titleCase("MILAGRO DE VIDA"));
console.log(titleCase("eSTA eS uNA prueBA DE MUY mAL gUSto"));
console.log(titleCase("domenico pagano hildebrandt"));

  