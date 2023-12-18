/*  Repite una cadena
---------------------
    Repite una cadena dada str (primer argumento) por un 
    número (num) de veces (segundo argumento). 
    Devuelve una cadena vacía si num no es un número positivo. 
    Para este desafío, no utilices el método incorporado .repeat().
*/

function repeatStringNumTimes(str, num) {
  let newStr = ""
  for(let i=0; i < num; i++){
    newStr += str
  }
  console.log(newStr)
  return newStr;
}

repeatStringNumTimes("abc", 3);
repeatStringNumTimes("abracadabra ", 2);
repeatStringNumTimes("xyz | ", 6);


/* Versión corta con .repeat() */ console.log('--------------')
function repeatStringNumTimesShort(str, num) {
    console.log(str.repeat(num))
    return str.repeat(num)
};

repeatStringNumTimesShort("abc", 3);
repeatStringNumTimesShort("abracadabra ", 2);
repeatStringNumTimesShort("xyz | ", 6);
