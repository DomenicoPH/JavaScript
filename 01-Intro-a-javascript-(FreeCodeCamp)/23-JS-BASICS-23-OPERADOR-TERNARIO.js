// Operador ternario -> (condición) ? respuesta A : respuesta B

// Con condicional IF
function returnMin(x,y){
    if (x < y){
        return x
    } else {
        return y
    }
}
console.log(returnMin(5,25));

// Con operador ternario
function retornarMin(x,y){
    return (x < y) ? x : y
}
console.log(retornarMin(10,5));
console.log(retornarMin(21,25));
console.log(retornarMin(11,12));
console.log(retornarMin(1,5));

function retornarMax(x,y){
    return (x > y) ? x : y
}
console.log(retornarMax(10,5));
console.log(retornarMax(21,25));
console.log(retornarMax(11,12));
console.log(retornarMax(1,5));


// Redefinimos los valores de a y b para otro ejemplo:
a = 5
b = 9
console.log(a > b ? a + 2 : b * 3 );

function operadorTernario(a,b){
    return (a > b ? a + 2 : b * 3 )
}

console.log(operadorTernario(5,1))      // 5 > 1 -> 5 + 2 = 7
console.log(operadorTernario(12,1))     // 12 > 1 -> 12 + 2 = 14
console.log(operadorTernario(5,100))    // 100 > 5 -> 100 * 3 = 300


// Múltiples operadores condicionales / ternarios