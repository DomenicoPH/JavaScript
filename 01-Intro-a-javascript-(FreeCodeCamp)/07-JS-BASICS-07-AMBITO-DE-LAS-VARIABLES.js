// Ámbito de las variables

// Variable de ámbito Global
var miVariableGlobal = 5    // Variable Global :  Definida en el ámbito global
console.log(miVariableGlobal);

function varGlobal(){
    console.log(miVariableGlobal);
}
varGlobal()

function varGlobalParam(variable){
    console.log(variable)
}
varGlobalParam(miVariableGlobal)


// Variable de ámbito Local
function toLocalVar(){
    var miVariableLocal = 10;   // Variable Local : Definida dentro de una función, solo accesible en el ámbito de dicha función
    console.log(miVariableLocal)
}
toLocalVar();

//console.log(miVariableLocal);   //Error: miVariableLocal no está definida (lo está pero solo localmente, dentro de la función 'toLocalVar')


// Ámbito Global VS. Ámbito Local
var miNombre = 'Domenico';
function mostrarMiNombre(){
    var miNombre = 'Plutonio'
    console.log(miNombre)
    console.log(`Mi nombre es ${miNombre}`)
}

console.log('--- Variable LOCAL: ');
mostrarMiNombre();

console.log('--- Variable GLOBAL: ');
console.log(miNombre);
console.log(`Mi nombre es ${miNombre}`);