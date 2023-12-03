// 1 Tipos de datos:
/*
    undefined   |Dato no definido
    null        |Dato de valor nulo
    boolean     |Booleano, su valor puede ser 'true' o 'false'
    string      |Cadena de texto, va entre '...' o "..." o `...`
    number      |Valor numérico
    object      |Objeto con datos internos. Va entre {...}
    symbol      |...?
*/


// 2 Variables
var miPrimeraVariable = 'Estoy aprendiendo Javascript en FreeCodeCamp';
console.log(miPrimeraVariable);


// 3 Variables con distintos tipos de dato asignados
console.log(' '); console.log('*** Variables con datos asignados ***');
// String
var myName = 'Domenico';
// Number
var myAge = 37;
// Boolean
var active = true;
// Array
var myBooks = [
    'El Golem', 
    'Jurassic Park', 
    'Crimen y castigo'
];
// Object
var myTeam = {
    member1: 'Dom',
    member2: 'Graci',
    member3: 'Gia'
};

console.log(myName);    //Domenico
console.log(myAge);     //37
console.log(active);    //true
console.log(myBooks)    //array myBooks con su contenido
console.log(myTeam);    //objeto myTeam con su contenido


// 4 Operador de asignación
console.log(' '); console.log('*** Operador de asignación ***');
var miVariableA;
var miVariableB = 20;

console.log('Valor de miVariableA: ', miVariableA)    //su valor será 'undefined': no se le ha asignado ningún valor
console.log('Valor de miVariableB: ', miVariableB)    //su valor asignado es 20

miVariableA = 10;           //asignamos el valor de 10 a la variable 'miVariableA'
console.log('Valor de miVariableA: ', miVariableA)    //ahora el valor de 'miVariableA' es 10


// 5 Asignar el valor de una variables a otra variable
console.log(' '); console.log('*** Valor de una variable asignado a otra variable ***');
var cinco = 5;
var five = cinco;
console.log('el valor de cinco es: ', cinco);
console.log('el valor de five es: ', five);

var tres = 3;
var three;
three = tres;
console.log('el valor de tres es: ', tres);
console.log('el valor de three es: ', three);


// 6 Terminología JavaScript

// DECLARAR una variable: No se le asigna valor
var j;
// INICIALIZAR una variable: Se le asigna valor
var k = 9;
// CAMELCASE | Se inicia con minúscula y a partir de la segunda palabra, cada nueva palabra se inicia con mayúscula.
var miVariableEnCamelCase = "Esta variable está escrita en CamelCase; Se inicia con minúscula y a partir de la segunda palabra, cada nueva palabra se inicia con mayúscula.";
// VARIABLE NO INICIALIZADA | 
var variableA;            //|--> variable DECLARADA | NO INICIALIZADA
console.log(variableA);   //|--> variable tiene valor de 'undefined'    |undefined
variableA = 100;          //|--> valor 100 asignado a variableA
console.log(variableA);   //|--> variable tiene valor de 100            |100


// 7 JavaScript es Case-Sensitive
var miVariableCC = 25;
//console.log(Mivariablecc);    // ERROR: Mivariablecc no existe. La forma correcta des escribir esta variable es: miVariableCC
console.log(miVariableCC);