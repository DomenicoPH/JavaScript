//  Letras faltantes

/*  Encuentra la letra que falta en la siguiente cadena de letras y devuélvela.
    Si todas las letras están presentes en la cadena, devuelve undefined.  */

function fearNotLetter(str) {
  for(let i=0; i < str.length; i++){                // itera sobre cada caracter de la cadena
    const charCode = str.charCodeAt(i)              // obtiene el código ASCII del caracter actual
    if(charCode !== str.charCodeAt(0) + i){         // Compara el caracter actual guardado en 'charCode' con el caracter esperado en una cadena ordenada
      return String.fromCharCode(charCode - 1)      // Si no coincide, significa que falta una letra en la secuencia. Devolver la letra que falta usando String.fromCharCode y el código ASCII anterior
    }
  }
  return undefined;
}
console.log(fearNotLetter("abce"))
console.log(fearNotLetter("abcdefghjklmno"))
console.log(fearNotLetter("stvwx"))
console.log(fearNotLetter("bcdf"))
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"))

/*  * if(charCode !== str.charCodeAt(0) + i)

    En el contexto del algoritmo proporcionado, charCode representa el código ASCII del carácter actual 
    en la cadena, mientras que str.charCodeAt(0) + i representa el código ASCII esperado para un carácter 
    en una secuencia ordenada.
    
    En el bucle for, cada iteración (i) representa la posición del carácter en la cadena. 
    str.charCodeAt(0) + i calcula el código ASCII esperado para el carácter en esa posición si la cadena 
    fuera una secuencia ordenada de letras. Este valor se compara con el código ASCII real del carácter 
    en esa posición (charCode).

    La comparación if (charCode !== str.charCodeAt(0) + i) verifica si el carácter actual tiene el código 
    ASCII esperado. Si los códigos ASCII no coinciden, significa que falta una letra en la secuencia 
    ordenada, y la función devuelve la letra faltante.

    En resumen, charCode es el código ASCII real del carácter actual, mientras que str.charCodeAt(0) + i 
    es el código ASCII esperado basado en la posición en una secuencia ordenada de letras. 
    La diferencia entre ellos revela si falta una letra en la secuencia.    */

/*  * return String.fromCharCode(charCode - 1)
    
    En el contexto del algoritmo, esta línea está devolviendo el carácter que falta en la secuencia ordenada. 
    Vamos a desglosarla:

    - charCode es el código ASCII del carácter actual en la cadena que no coincide con el código esperado.
    - charCode - 1 resta 1 al código ASCII del carácter actual. Esto se hace asumiendo que la letra faltante 
      debería ser la letra anterior en la secuencia ordenada.
    
    Por ejemplo, si la cadena es "bcdefg", y la letra faltante es "e", entonces charCode sería el código ASCII 
    de "g", y charCode - 1 sería el código ASCII de "f". La función String.fromCharCode() toma un código ASCII 
    y devuelve el carácter correspondiente. Por lo tanto, String.fromCharCode(charCode - 1) devuelve el carácter 
    que falta en la secuencia.

    En el ejemplo mencionado, la función devolverá "f" porque es la letra faltante en la secuencia ordenada "abcdefg".

    * fromCharCode

    En JavaScript, String.fromCharCode() es un método estático que pertenece al objeto String. 
    Este método toma uno o más valores de códigos de caracteres Unicode y devuelve la cadena formada 
    por esos caracteres.

    La palabra clave from en String.fromCharCode() simplemente indica que el método crea una cadena a partir 
    de los códigos de caracteres especificados. Por ejemplo:

        String.fromCharCode(65, 66, 67); // Devuelve la cadena "ABC"

    En este ejemplo, los números 65, 66 y 67 son códigos Unicode para las letras "A", "B" y "C" respectivamente. 
    String.fromCharCode() toma estos códigos y devuelve la cadena formada por esos caracteres.
    En el contexto del algoritmo que proporcionaste anteriormente:

        return String.fromCharCode(charCode - 1);

    Esta línea utiliza String.fromCharCode() para devolver el carácter correspondiente al 
    código ASCII charCode - 1.    */


// Alt
function fearNotLetterAlt(str){
    let currentCharCode = str.charCodeAt(0)
    let missing = undefined
    str.split('').forEach(letter => {
        if(letter.charCodeAt(0) === currentCharCode){
            currentCharCode++
        } else {
            missing = String.fromCharCode(currentCharCode)
        }
    })
    return missing;
}
console.log(fearNotLetterAlt("abce"))
console.log(fearNotLetterAlt("abcdefghjklmno"))
console.log(fearNotLetterAlt("stvwx"))
console.log(fearNotLetterAlt("bcdf"))
console.log(fearNotLetterAlt("abcdefghijklmnopqrstuvwxyz"))


// Alt2
function fearNotLetterAlt2(str){
    for(let i=1; i < str.length; i++){
        if(str.charCodeAt(i) - str.charCodeAt(i - 1) > 1){
            return String.fromCharCode(str.charCodeAt(i - 1) + 1)
        }
    }
}
console.log(fearNotLetterAlt2("abce"))
console.log(fearNotLetterAlt2("abcdefghjklmno"))
console.log(fearNotLetterAlt2("stvwx"))
console.log(fearNotLetterAlt2("bcdf"))
console.log(fearNotLetterAlt2("abcdefghijklmnopqrstuvwxyz"))