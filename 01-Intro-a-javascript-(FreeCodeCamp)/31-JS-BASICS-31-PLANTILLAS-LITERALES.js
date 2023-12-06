/* Plantillas Literales o Plantillas de cadenas.
--------------------------------------------------------------------------------------------
    Características:
        * Se usa el acento invertido (`backtick`) en lugar de las comillas simples o dobles.
        * Pueden contener comillas simples y dobles.
        * Las líneas se preservan como se escriben en el código.
        * Para reemplazar una variable se escribe ${variable}.
        * Dentro de ${} también puedes escribir expresiones.

Ejemplos:   */

var a = 6;
console.log(`El valor de a es ${a}`);

var a = 5;
var b = 4;
var c = (a * b)
console.log(`El resultado de ${a} x ${b} es igual a ${c}`);

var nombre = 'Nora';
var edad = 26;
console.log(`Su nombre es ${nombre} y tiene ${edad} años,`);
console.log(`La edad de ${nombre} es ${edad} años`);
console.log(`${nombre} lleva ${edad} años dando vueltas por el mundo`);

var miArreglo = [1, 2, 3, 4];
console.log(`El arreglo es ${JSON.stringify(miArreglo)}`);
console.log(`Mi arreglo contiene los números: ${miArreglo}`);
console.log(`Mi arreglo contiene los números: ${miArreglo[0]}, ${miArreglo[1]}, ${miArreglo[2]} y ${miArreglo[3]}`);

var persona = {
    nombre: 'Domenico',
    edad: 37
};
const SALUDO = `Hola, mi nombre es ${persona.nombre} y tengo ${persona.edad} años.`
console.log(SALUDO)