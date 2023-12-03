// Strings | Cadenas de caracteres

var nombre = "Alan";                        // comillas dobles
var apellido = 'Turing';                    // comillas simples
var nombreCompleto = `Alan Turing`;         // acento grave / backticks

// Escape
var cadena1 = "Soy una cadena de caracteres \"con comillas\""   //escape con barra invertida
console.log(cadena1);
var cadena2 = "Soy una cadena de caracteres 'con comillas'"     //combinación de comillas dobles y simples
console.log(cadena2);
var cadena3 = 'Soy una cadena de caracteres "con comillas"'     //combinación de comillas dobles y simples
console.log(cadena3);
var cadena4 = `${cadena1}`      //template strings
console.log(cadena4);


/* Secuencias de escape

\'  ->  Comilla Simple
\"  ->  Comilla Doble
\\  ->  Bara invertida
\n  ->  Línea nueva
\r  ->  Retorno del carro
\t  ->  Tabulación
\b  ->  Retroceso
\f  ->  Salto de Página
...
*/

// Algunos ejemplos
var usoComillaSimple = 'Así se usa \'La comilla simple\'';
console.log(usoComillaSimple);
var usoComillaDoble = "Así se usa \"La comilla doble\"";
console.log(usoComillaDoble);
var usoBarraInvertida = "Así se usa \\ la barra invertida";
console.log(usoBarraInvertida);
var usoLineaNueva = "Así saltamos \n a una nueva línea \n por si te interesa \n saberlo...";
console.log(usoLineaNueva);
var usoTabulacion = "Así tabulamos \t y tabulamos... \t y tabulamos... \t y tabulamos.";
console.log(usoTabulacion);

// Concatenar Strings
var alanTuring = 'Alan' + 'Turing';
console.log(alanTuring);    // No hay espacio entre el nombre y el apellido
alanTuring = 'Alan ' + 'Turing';
console.log(alanTuring);    // (Espacio después de 'Alan ') Perfecto!
alanTuring = 'Alan' + ' Turing';
console.log(alanTuring);    // (Espacio antes de ' Turing') Perfecto!
alanTuring = 'Alan' + ' ' + 'Turing';
console.log(alanTuring);    // (Espacio entre 'Alan' y 'Turing') Perfecto!

// Concatenar usando variables:
console.log(nombre);
console.log(apellido);
console.log(nombre + ' ' + apellido);
console.log(`${nombre} ${apellido}`);

var persona = 'Domenico'
var verbo = 'programar'
var lenguaje = 'JavaScript'
var myStringExample1 = persona + ' está aprendiendo a ' + verbo + ' con ' + lenguaje;
console.log(myStringExample1);
var myStringExample2 = `${persona} está aprendiendo a ${verbo} con ${lenguaje}`
console.log(myStringExample2);

var mensajeCompleto = "Estoy aprendiendo a programar ";
var finalMensaje = "con FreeCodeCamp."
console.log('Mensaje incompleto: ', mensajeCompleto);
mensajeCompleto += finalMensaje;
console.log('Mensaje completo: ', mensajeCompleto);

// La longitud de una cadena
var miCadena;
miCadena = 'A'
console.log(miCadena.length);
miCadena = 'ABC'
console.log(miCadena.length);
miCadena = 'Hello World'
console.log(miCadena.length);
miCadena = 'Hello World!!!'
console.log(miCadena.length);

var cadenaNumerica = '100'
console.log(cadenaNumerica.length);
cadenaNumerica = '350000'
console.log(cadenaNumerica.length);
cadenaNumerica = '390000.50'
console.log(cadenaNumerica.length);

// Notación de Corchetes
var lenguajeDeProgramacion = 'JavaScript'
/*
String  :   J a v a S c r i p t
Index   :   0 1 2 3 4 5 6 7 8 9
*/

console.log(lenguajeDeProgramacion[0]);
console.log(lenguajeDeProgramacion[4]);
console.log(lenguajeDeProgramacion[0] + lenguajeDeProgramacion[4]);

    // Inmutabilidad
var miCadenaInmutable = "Jola Mundo!" // Cadena con un error en el índice [0]
console.log(miCadenaInmutable);
miCadenaInmutable[0] = 'H'; // No producirá ningún efecto en la cadena
console.log(miCadenaInmutable);
// Podemos reasignar el valor total de la variable:
miCadenaInmutable = 'Hola Mundo!'
console.log(miCadenaInmutable);

// Acceder a un caracter usando su posición
var miNombreCompleto = 'Domenico Pagano Hildebrandt';
var misIniciales = miNombreCompleto[0] + miNombreCompleto[9] + miNombreCompleto[16];
console.log(`${miNombreCompleto} (${misIniciales})`);

// Acceder al último caracter
var ultimoCaracterPos = miNombreCompleto.length - 1                     // Me muestra la posición del último caracter
var ultimoCaracter = miNombreCompleto[miNombreCompleto.length - 1]      // Me muestra el último caracter
console.log(ultimoCaracterPos);
console.log(ultimoCaracter);

console.log(miNombreCompleto.length);   // Longitud total de mi cadena

// Penúltimo, antepenúltimo, etc...
var javascript = 'JavaScript'
var python = 'Python'
var cplusplus = 'C++'

console.log(javascript[javascript.length - 6]);
console.log(python[python.length-1], python[python.length-2], python[python.length-3], python[python.length-4], python[python.length-5], python[python.length-6]);
console.log(`${cplusplus[0]} es igual a ${cplusplus[cplusplus.length-3]}`);