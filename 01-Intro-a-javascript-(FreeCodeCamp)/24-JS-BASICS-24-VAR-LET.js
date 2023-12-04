// 1. var -VS- let

// (var) var se puede declarar más de una vez.
var campista = 'James';
    console.log(campista)
var campista = 'David';
    console.log(campista)
var campista = 'John';
    console.log(campista)

// (let) let se puede declarar una sola vez.
let estudiante = 'Jason';
    console.log(estudiante)
// let estudiante = 'Peter';   // Esto da ERROR: variable YA DECLARADA.
estudiante = 'Peter'    // Aquí no se vuelve a declarar, solo se le asigna un nuevo valor
    console.log(estudiante)
estudiante = 'Mary'
    console.log(estudiante)


// 2. var -VS- let
var variableGlobal = 4  // definida fuera de la función
console.log(variableGlobal);

function mostrarVariables(){
    console.log('-- Resultado de la función:--')
    console.log(' - Variable Global: ',variableGlobal);
    var variableLocal = 8   // definida dentro de la función
    console.log(' - Variable Local: ',variableLocal);
}
mostrarVariables();

console.log(variableGlobal);
// console.log(variableLocal); // ERROR: variable no definida

//---

// var i
for(var i = 0; i < 3; i++){
    console.log(i)
};
console.log(i)

// let j
for(let j = 0; j < 3; j++){
    console.log(j)
};
// console.log(j)  // j is not defined


var mostrarColor = true;
if (mostrarColor){
    let color =  'verde';
    console.log(`Mi color favorito es: ${color}`)
}
// console.log(color)  // color is not defined

if(mostrarColor){
    var kolor = 'rojo'
    console.log(`Mi color favorito es: ${kolor}`)
}
console.log(kolor);