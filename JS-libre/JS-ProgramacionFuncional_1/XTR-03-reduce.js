// Métodos - https://youtube.com/playlist?list=PLRBma32phT7gswvaDSe8Agpf14XL58OoD&si=xhZGWfzNzG41Cbmt

/* reduce */

const arreglo = [1, 2, 3, 4];
const arregloComplex = [10, 56, 125, 90, 400, 33, 16, 11]

// -- REDUCER -- REDUCER -- REDUCER --
const reducer = (acumulador, valorActual) => acumulador + valorActual
// -- REDUCER -- REDUCER -- REDUCER --

// reducer = Function callback (acumulador, valorActual, index, array);   |   index y array son valores opcionales

console.log(arreglo.reduce(reducer))
console.log(arreglo.reduce((box, i) => box + i))

console.log(arregloComplex.reduce(reducer))
console.log(arregloComplex.reduce((box, i) => box + i))

// Utilizando el valorInicial o valorActual
console.log(arreglo.reduce(reducer));
console.log(arreglo.reduce(reducer, 5));
console.log(arreglo.reduce(reducer, 18));


function suma(acumulador, value, index, arreglo){
    return acumulador + value;
}

function sumaCond(acumulador, value, index, arreglo){
    if(acumulador > value){
        return acumulador;
    } else {
        return value;
    }
}

//total
const total = arreglo.reduce(suma)
console.log(total)

//total Condicionado
const totalCond = arreglo.reduce(sumaCond)
console.log(totalCond)
const totalCondPlus = arreglo.reduce(sumaCond, 10)
console.log(totalCondPlus)


// REDUCE para indexar...
const personas = [
    {
        nombre: 'Carlos',
        edad: 24
    },
    {
        nombre: 'Pedro',
        edad: 30
    },
    {
        nombre: 'Pablo',
        edad: 20
    }
];

const valores = personas.reduce((acumulador, valor) => ({
    ...acumulador,
    [valor.nombre]: valor
}),{});

console.log(valores)

let pedro = valores['Pedro'];
let carlos = valores['Carlos'];
let pablo = valores['Pablo']

console.log(pedro)
console.log(carlos)
console.log(pablo)