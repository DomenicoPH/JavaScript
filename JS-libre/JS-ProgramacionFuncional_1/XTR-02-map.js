// Métodos - https://youtube.com/playlist?list=PLRBma32phT7gswvaDSe8Agpf14XL58OoD&si=xhZGWfzNzG41Cbmt

/* map */

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function x2(value, index, arr){
    return value * 2
};

function x3(value, index, arr){
    return value * 3
};

function x10(value, index, arr){
    return value * 10
};

function x100(value, index, arr){
    return value * 100
};

const numerosX2 = numeros.map(x2)
const numerosX3 = numeros.map(x3)
const numerosX10 = numeros.map(x10)
const numerosX100 = numeros.map(x100)

console.log(numeros)
console.log(numerosX2)
console.log(numerosX3)
console.log(numerosX10)

function valueXindex(value, index, arr){
    return value * index
}

function valueXindexPLUS1(value, index, arr){
    console.log(value * (index + 1))
    console.log(value * index + 1)
    return value * (index + 1)
}

const valXindex = numeros.map(valueXindex)
console.log(valXindex)

const validatevalueXindexPLUS1 = numeros.map(valueXindexPLUS1)
console.log(validatevalueXindexPLUS1)

// productos

const productos = [
    {
        nombre: 'iphone',
        precio: 1000,
        cantidad: 10
    },
    {
        nombre: 'laptop',
        precio: 2500,
        cantidad: 5
    },
    {
        nombre: 'teclado',
        precio: 240,
        cantidad: 30
    }
];

const totalProductosPrecio = productos.map(item => item.precio * item.cantidad)
console.log(totalProductosPrecio)

const totalProductos = productos.map(item => ({
    'producto': item.nombre,
    'total vendido': item.precio * item.cantidad
}))
console.log(totalProductos)