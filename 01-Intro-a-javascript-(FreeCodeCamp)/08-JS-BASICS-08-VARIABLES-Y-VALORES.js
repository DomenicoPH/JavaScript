// VARIABLES

// Retornar valores
function sumar (a,b){
    return a + b
}

console.log(sumar(5,12));
console.log(sumar(5,200));
var resultado = sumar(5,12)
console.log(resultado);
resultado = sumar(10,10)
console.log(resultado);
console.log(resultado += 20);

// Undefined
// Las funciones retornan el valor que nosotros definamos. Si no definimos que esta retorne nada el valor por defecto que resultará de la función será 'undefined'
function sumarUndef(a,b){
    console.log(a + b);
    //return a + b  // No retorna nada
}
sumarUndef(5,5);
console.log(sumarUndef(5,5));   //undefined: la función no retorna nada

// Asignar valor retornado a una variable
// Usamos la función 'sumar' declarada más arriba
sumar(5,3);
console.log(sumar(5,3));
// Retorna 8

var result = sumar(5,3);
console.log(result);
// Retorna 8

function crearCadenaMeta(langProg){
    return 'Mi meta es aprender ' + langProg
}
//lenguajes
let l1 = 'JavaScript'
let l2 = 'Python'
let l3 = 'C'
let l4 = 'C++'

let meta = crearCadenaMeta(l1)
console.log(meta);
meta = crearCadenaMeta(l2);
console.log(meta);
meta = crearCadenaMeta(l3);
console.log(meta);
meta = crearCadenaMeta(l4);
console.log(meta);

// ► NEXT IN LINE ► (Queue)
console.log('Queues...');
function nextInLine(arr, elem){
    arr.push(elem);         // Agrega 'elem' al final del 'arr'
    return {    // Retprna un objeto con:
        "valor extraido": arr.shift(),   // Remueve el primer 'elem' al comienzo del 'arr' y lo retorna
        "Array resultante": arr         // Array resultante sin el 'elem' extraido
    };
};
//test ->
let arr1 = [1, 2, 3, 4, 5];
let arr2 = ['a', 'b', 'c', 'd', 'e'];

console.log(' ----- Arreglo de números: ', JSON.stringify(arr1));
let resultado1 = nextInLine(arr1,6)
console.log(JSON.stringify(resultado1));
resultado1 = nextInLine(arr1,7)
console.log(JSON.stringify(resultado1));
resultado1 = nextInLine(arr1,8)
console.log(JSON.stringify(resultado1));
resultado1 = nextInLine(arr1,9)
console.log(JSON.stringify(resultado1));

console.log(' ----- Arreglo de letras: ', JSON.stringify(arr2));
let resultado2 = nextInLine(arr2,'f');
console.log(JSON.stringify(resultado2));
resultado2 = nextInLine(arr2,'g');
console.log(JSON.stringify(resultado2));
resultado2 = nextInLine(arr2,'h');
console.log(JSON.stringify(resultado2));
resultado2 = nextInLine(arr2,'i');
console.log(JSON.stringify(resultado2));

// Valores Booleanos = true | false
console.log('\nValores Booleanos:');
console.log(true);
console.log(false);

console.log('1 > 10 = ', 1 > 10);
console.log('10 > 1 = ', 10 > 1);
console.log('1 === 10 = ', 1 === 10);
console.log('1 === Math.ceil(0.9) = ', 1 === Math.ceil(0.9));