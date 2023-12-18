/*  Encuentra la palabra más larga en una cadena
------------------------------------------------
    Devuelve la longitud de la palabra más larga 
    en la oración proporcionada.
    
    Tu respuesta debe ser un número.
*/

function findLongestWordLength(str) {
    let longest = ''
    let divided = str.split(' ')
    for(let i=0; i < divided.length; i++){
      if(divided[i].length > longest.length){
        longest = divided[i]
      }
    }
    console.log(longest, '-', longest.length)
    return longest.length;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");
  findLongestWordLength("El murciélago es un mamífero volador");
  findLongestWordLength("salvoconducto o peaje");
