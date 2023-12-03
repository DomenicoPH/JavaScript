// Funciones

// Sintaxis - Definición de al función:
console.log('\nFunción 1:');
function mostrarMensaje(){
    console.log('Hola mundo!')
}
// Ejecución de la función
mostrarMensaje();


//--------------------------------------------------------------------------------
console.log('\nFunción 2:');
var saludoA = 'Hola mundo!'
var saludoB = 'Buenas noches!'
var saludoC = 'Hola JS, buenos días!'

function mostrarSaludo(saludo){
    console.log(saludo);
}
mostrarSaludo(saludoA);
mostrarSaludo(saludoB);
mostrarSaludo(saludoC);


//--------------------------------------------------------------------------------
console.log('\nFunción 3:');
var dom = 'Domenico';
function saludarA(persona){
    var saludoPersonalizado = `Bienvenido ${persona}`
    console.log(saludoPersonalizado);
}
saludarA(dom);
saludarA('Pedro Páramo');
saludarA('Conejo de la suerte');
saludarA('2024!!')



// SUMAR //--------------------------------------------------------------------------------
console.log('\nFunción 4:');
function sumar(a, b){
    var suma = a + b
    console.log(`El resultado de ${a} + ${b} es ${suma}`);
}
sumar(5,7);
sumar(3,9);
sumar(25,34);
sumar(180,21);

let m = 1000
let c = 100
sumar(m,c);


// RESTAR //--------------------------------------------------------------------------------
console.log('\nFunción 5:');
function restar(a, b){
    var resta = a - b
    console.log(`El resultado de ${a} - ${b} es ${resta}`);
}
restar(10,5);
restar(75,25);
restar(80,21);
restar(m,c);


// CONCATENAR //--------------------------------------------------------------------------------
console.log('\nFunción 6:');
function concatenarCadenas(c1,c2,c3){
    console.log(`${c1} ${c2} ${c3}`)
}
concatenarCadenas('Mi','nombre', 'es Pedro');
concatenarCadenas('Nos', 'tardamos', 'mucho');
concatenarCadenas('El', 'agua', 'clara');