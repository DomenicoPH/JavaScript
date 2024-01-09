// Arrays [ https://youtu.be/LYF4FeJyccc?si=1lR-11k6TeeIMa1p ]

const nums = [12, 56, 70, 1, 73, 90, 23, 39, 40, 86, 10, 25]

nums.push('end')
nums.unshift('start')

console.log(nums)

nums.splice(1,2)
nums.splice(2,2)
nums.splice(3,2)
nums.splice(4,1)
nums.splice(5,1)

console.log(nums)

const onlyNums = function stringsAndnums(arr){
    return arr.filter((element) => typeof(element) === 'number')
}
let numbers = onlyNums(nums)
let numbersClon = numbers
let clonFree = [...numbersClon]

numbersClon.push(20)
numbers.unshift(50)

clonFree.unshift('I AM...')
clonFree.push('SOO FREEE!')

console.log(numbers)
console.log(numbersClon)
console.log(clonFree)

let string1 = clonFree.shift()
let string2 = clonFree.pop()
console.log(string1)
console.log(string2)
console.log(clonFree)

let setenta = clonFree.slice(0,1)
console.log(setenta)
let noventa = clonFree.slice(1,2)
console.log(noventa)
let cuarenta = clonFree.slice(2,3)
console.log(cuarenta)

const initNums = [10, 20, 30]
const newNums = [...initNums, ...cuarenta, ...setenta, ...noventa]

newNums.splice(4,0,50)
newNums.splice(5,0,60)
newNums.splice(7,0,80)
newNums.unshift(0)
newNums.push(100)

console.log(newNums)

const zero = newNums.slice(0,1)
const firstHalf = newNums.slice(1,6)
const secondHalf = newNums.slice(6,newNums.length)

console.log(zero)
console.log(firstHalf)
console.log(secondHalf)

// funciones

// función de primer orden

let fn = function(){
    console.log('-- Hola mundo --');
};

fn()

// función de orden superior | Recibe función por parámetro

function some(f){
    console.log('algo antes')
    f()
    console.log('algo después')
}

some(fn)

//...

let uno = () => console.log([1, 'Uno / One', 'I'])
let dos = () => console.log([2, 'Dos / Two', 'II'])

function onetwothree(f){
    uno()
    f()
    console.log([3, 'Tres / Three', 'III'])
}

onetwothree(dos)

//...

let showName = (name,lastname) => console.log(`Hola, me llamo ${name} ${lastname}`)
showName('Hello','Kitty')
showName('Mickey','Mouse')
showName('Pedro','Navaja')

// foreach()
const allBeers = [
    {
        name: "Heineken",
        price: 4.50,
        alcohol: 4.5
    },
    {
        name: "Stella Artois",
        price: 5.50,
        alcohol: 5.0
    },
    {
        name: "Corona",
        price: 2.50,
        alcohol: 4.5
    },
    {
        name: "Budweiser",
        price: 6,
        alcohol: 4.5
    }
];

allBeers.forEach((item) => console.log('Producto | ', item))
allBeers.forEach((item) => console.log('Cerveza: ' + item.name))
allBeers.forEach((item) => console.log('Precio de la ' + item.name + ': ' + item.price))

function print(elemento){
    console.log(`---||-- This is for ${elemento.name} --||---`)
    console.log(elemento)
    console.log('---||--------------------------------------||---')
}

allBeers.forEach(print)

function print2(elemento, i){
    console.log('Product on Index:'+ i)
    console.log(elemento)
}

allBeers.forEach(print2)


// sort()
console.log('CERVEZAS')
console.log(allBeers)

allBeers.sort((a,b) => a.price - b.price) // ASCENDENTE: ordena en función del precio (de menor a mayor)
    console.log('PRECIOS: menor a mayor')
console.log(allBeers)

allBeers.sort((a,b) => b.price - a.price) // DESCENDENTE: ordena en función del precio (de mayor a menor)
    console.log('PRECIOS: mayor a menor')
console.log(allBeers)


//ordenamiento con sort:
const menu = [
    {
        plato: 'Arroz con pollo',
        precio: 18,
    },
    {
        plato: 'Chaufa Especial',
        precio: 24,
    },
    {
        plato: 'Lomo saltado',
        precio: 36
    },
    {
        plato: 'Causa de pollo',
        precio: 12
    },
    {
        plato: 'Helado de Lúcuma',
        precio: 5
    }
];

console.log(menu)


// Ordenamiento numérico --->

const ordenAsc = (a,b) => a.precio - b.precio
const ordenDsc = (a,b) => b.precio - a.precio

console.log(menu.sort(ordenAsc))
console.log(menu.sort(ordenDsc))

menu.splice(4,0,{plato: 'Fetuccini con pesto', precio: 28})
menu.splice(3,0,{plato: 'Gelatina', precio: 2.5})
menu.splice(7,0,{plato: 'Parrillada completa', precio: 150})
console.log(menu)

console.log(menu.sort(ordenAsc))
console.log(menu.sort(ordenDsc))

// Ordenamiento alfabético --->

// A -> Z
const ordenAlfabeticoAZ = function(a,b){
    if(a.plato > b.plato){return 1}
    if(a.plato < b.plato){return -1}
    return 0;
}

// Z -> A
const ordenAlfabeticoZA = function(a,b){
    if(a.plato < b.plato){return 1}
    if(a.plato > b.plato){return -1}
    return 0;
}

console.log(menu)
console.log(menu.sort(ordenAlfabeticoAZ))
console.log(menu.sort(ordenAlfabeticoZA))


// find() - Encuentra el primer array que cumpla con una determinada condición.

// array menu
console.log(menu.find((item) => item.plato === 'Arroz con pollo'))
console.log(menu.find((item) => item.plato === 'Parrillada completa'))
console.log(menu.find((item) => item.plato === 'Sopa de piedras')) // no existe (!)
console.log(menu.find((item) => item.precio < 200))
console.log(menu.find((item) => item.precio < 5))
console.log(menu.find((item) => item.precio === 24))
console.log(menu.find((item) => item.precio === 25)) // no existe (!)
console.log(menu.find((item) => item.precio === 28))

// array allBeers
console.log(allBeers.find((beer) => beer.alcohol < 8))
console.log(allBeers.find((beer) => beer.price < 3))
console.log(allBeers.find((beer) => beer.name.includes('Bud')))
console.log(allBeers.find((beer) => beer.name === 'Corona'))


// every() - Retorna TRUE si 'TODOS' sus elementos cumplen con la condición, caso contrario retorna FALSE.

let priceOverZero = (e) => e.price > 0;
let priceOverFive = (e) => e.price > 5;
let hasPrice = (e) => e.price
let hasTemperature = (e) => e.temperature
console.log(allBeers.every(priceOverZero))
console.log(allBeers.every(priceOverFive))
console.log(allBeers.every(hasPrice))
console.log(allBeers.every(hasTemperature))

// some() - Retorna TRUE si 'ALGUNO' de sus elementos cumplen con la condición, caso contrario retorna FALSE.

console.log(allBeers.some(priceOverZero))
console.log(allBeers.some(priceOverFive))
console.log(allBeers.some((x) => x.price > 5))
console.log(allBeers.some((x) => x.price > 10))
console.log(allBeers.some(hasPrice))
console.log(allBeers.some(hasTemperature))
console.log(allBeers.some((x) => x.name.includes('Cor')))
console.log(allBeers.some((x) => x.name.includes('Bri')))
console.log(allBeers.some((x) => x.name === 'Corona'))
console.log(allBeers.some((x) => x.name === 'Cristal'))

// reverse() - Invierte el array (mutable)
const numerosAscendentes = [1, 2, 3, 4, 5, 6, 7]
console.log(numerosAscendentes)
console.log(numerosAscendentes.reverse())
console.log(numerosAscendentes) // ( MUTABLE )
const numerosDescendentes = numerosAscendentes
console.log(numerosDescendentes)

// map()    Recorre todos los elementos del array y ejecuta una función / funciones sobre cada uno de ellos. 
//          Retorna un nuevo arreglo con el resultado (Es una función pura. No causa daños colaterales)

let primerosPares = [2, 4, 6, 8, 10]
console.log(primerosPares)
let primerosImpares = primerosPares.map((num) => num - 1)
console.log(primerosImpares)
console.log(primerosPares) // INMUTABLE

// reduce()     Reduce a un solo valor todos los elementos de un array.

let sumaDePares = primerosPares.reduce((acc,current) => acc + current, 0)
console.log(sumaDePares)

let sumaDeImpares = primerosImpares.reduce((acc,current) => acc + current, 0)
console.log(sumaDeImpares)

console.log(sumaDePares + sumaDeImpares)

let restaDePares = primerosPares.reverse().reduce((acc,curr) => acc - curr)
console.log(restaDePares)
let restaDeImpares = primerosImpares.reverse().reduce((acc,curr) => acc - curr)
console.log(restaDeImpares)

const oneToTen = [...primerosImpares, ...primerosPares]
    console.log(oneToTen)
oneToTen.sort((a,b) => a - b)
    console.log(oneToTen)

// mis platos (menu)
let misPlatos = menu.reduce((acc,curr) => acc + ' [-- ' + curr.plato + ' s/.' + curr.precio + ' --]','')
console.log(misPlatos)


// Array de funciones:

const fns = [
    () => console.log(),
    () => console.log('----------------------------------------------------------------------'),
    () => console.log('Soy la primera función | Y abro este proceso'),
    () => console.log('Soy la segunda función | Y no hago nada, me limito a estar en el medio'),
    () => console.log('Soy la tercera función | Y cierro este proceso'),
    () => console.log('----------------------------------------------------------------------'),
    () => console.log(),
];

fns.forEach(f => f())