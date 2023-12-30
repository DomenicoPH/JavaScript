// Métodos - https://youtube.com/playlist?list=PLRBma32phT7gswvaDSe8Agpf14XL58OoD&si=xhZGWfzNzG41Cbmt

/* push | pop | shift | unshift */

/*  Add (+)--------------------------------------------------------------
    push(value)     |   Añade 'value' al final del array
    unshift(value)  |   Añade 'value' al comienzo del array
    
    Substract (-)--------------------------------------------------------
    pop()           |   Sustrae (y retorna) el último elemento del array
    shift()         |   Sustrae (y retorna) el primer elemento del array
*/

const nombres = ['Ana', 'Pedro', 'Pablo'];
const numeros = [2, 3, 4]

console.log(nombres);
console.log(numeros);

//push(value)
nombres.push('Juan');   // + Juan (end)
console.log(nombres);

numeros.push(5);
console.log(numeros)

//unshift(value)
nombres.unshift('Maria')    // + Maria (start)
console.log(nombres);

numeros.unshift(1)
console.log(numeros)

//pop()
nombres.pop()
console.log(nombres)
nombres.pop()
console.log(nombres)

numeros.pop()
console.log(numeros)
numeros.pop()
console.log(numeros)

//shift()
nombres.shift()
console.log(nombres)
nombres.shift()
console.log(nombres)

numeros.shift()
console.log(numeros)
numeros.shift()
console.log(numeros)