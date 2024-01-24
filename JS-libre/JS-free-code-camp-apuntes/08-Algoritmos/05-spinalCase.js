//  Spinal case

/*
    Convierte una cadena a spinal case. Spinal case significa 
    todas-las-palabras-en-minúscula-unidas-por-guiones.
*/

function spinalCase(str) {
  console.log(str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase())
  return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase();
}

spinalCase('This Is Spinal Tap');
spinalCase("The_Andy_Griffith_Show")
spinalCase("Teletubbies say Eh-oh")
spinalCase("AllThe-small Things")

/*  *****   Expresiones Regulares   *****

    /(\s|_|(?=[A-Z]))/
    
    La expresión regular /(\s|_|(?=[A-Z]))/ se utiliza para hacer coincidir 
    espacios en blanco (\s), guiones bajos (_), o posiciones antes de letras 
    mayúsculas ((?=[A-Z])). 
    
    Aquí hay una desglose de cada parte:

    ♦  \s: Coincide con cualquier carácter de espacio en blanco (como 
           espacios, tabulaciones, saltos de línea, etc.).

    ♦  |: Es un operador de alternancia que actúa como un "o" lógico. 
          En este contexto, significa que debe coincidir con cualquier 
          cosa a la izquierda o a la derecha del operador.

    ♦  _: Coincide con el carácter de guion bajo.

    ♦  (?=[A-Z]): Esto es un ejemplo de una "búsqueda hacia adelante" 
                  ((?=...)). Significa que la coincidencia debe ser 
                  seguida por lo que está dentro de los paréntesis. 
                  En este caso, busca una posición en la cadena 
                  donde está seguida por una letra mayúscula de 
                  la A a la Z.

    En resumen, esta expresión regular busca coincidencias con espacios en blanco, 
    guiones bajos o posiciones antes de letras mayúsculas. Esto es útil cuando se 
    desea dividir una cadena basándose en estas condiciones, por ejemplo, para 
    convertir nombres en formato "CamelCase" o "snake_case" en palabras separadas.

    */