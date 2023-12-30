// Métodos - https://youtube.com/playlist?list=PLRBma32phT7gswvaDSe8Agpf14XL58OoD&si=xhZGWfzNzG41Cbmt

/* forEach */

// numeros
const numeros = [1, 2, 3, 4, 5]

function escribirNumero(item, index, arr){
    console.log('numeros[' + index + '] = ' + item);
}

numeros.forEach(escribirNumero)
numeros.forEach((item, index) => {
    console.log('numeros[' + index + '] = ' + item)
})

let suma = 0
numeros.forEach(item => {
    suma += item;
});
console.log(suma)


// letras
const letras = ['a','b','a','b','c','a','d'];

let contador = {};

letras.forEach(item => {
    if(contador[item]){
        contador[item]++
    } else {
        contador[item] = 1
    }
})

console.log(contador)

// Desde una función:
function counter(arr){
    let contador = {};
    arr.forEach(item => {
        if(contador[item]){
            contador[item]++
        } else {
            contador[item] = 1
        }
    })
    return contador
}

// test arrays:
let array1 = [1, 2, 3, 4, 4, 5, 6, 2, 1, 5, 7, 7, 8, 1, 9, 3, 6];
let array2 = ['a', 'b', 'c', 'a', 'a', 'd', 'e', 'f', 'd', 'g'];
let array3 = ['gol', 'bola', 'hola', 'gola', 'gol', 'hola'];

console.log(counter(array1));
console.log(counter(array2));
console.log(counter(array3));