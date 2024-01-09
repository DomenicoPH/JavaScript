// Arrays [ https://youtu.be/LYF4FeJyccc?si=1lR-11k6TeeIMa1p ]

let nombres = ['Andrea', 'Marta', 'Carlos', 'Alberta']
let numbers = [2, 3, 4, 5]

function showDom(element, arr){
    document.getElementById(element).innerHTML = "";
    for(let i = 0; i < arr.length; i++){
        document.getElementById(element).innerHTML += 
        `<div>${arr[i]}</div>`
    }
}

function showDomObjs(element, arr){
    document.getElementById(element).innerHTML = "";
    for(let i = 0; i < arr.length; i++){
        document.getElementById(element).innerHTML += 
        `<div style="background-color:green">
            ${arr[i].name}
        </div>
        <div style="background-color:yellow">
            ${arr[i].price}
        </div>
        <div style="background-color:yellow">
            ${arr[i].alcohol}
        </div>`
    }
}

function showDomForOf(element, arr){
    document.getElementById(element).innerHTML = "";
    for(let item of arr){
        document.getElementById(element).innerHTML += 
        `<div style="background-color:blue">
            ${item.name}
        </div>
        <div style="background-color:red">
            ${item.price}
        </div>
        <div style="background-color:red">
            ${item.alcohol}
        </div>`
    }
}

// --- --- --- Metodos mutables --- --- ---

// push: añade valor al final del array
nombres.push('Antonio')
numbers.push(6)

// unshift: añade valor al comienzo del array
nombres.unshift('Pedro')
numbers.unshift(1)

// splice: añade valor en una posición específica del array
// Param1:placeIndex | Param2:delete | Param3:valueToPlace
nombres.splice(2, 0, 'Timoteo')
numbers.splice(3, 0, 333)

//...
//numbers.splice(6,0,666) // inserta en el índice 6 desplazando hacia adelante el resto del array.
numbers.splice(6,1,666) // reemplaza el valor en el índice 6. El resto del array mantiene sus índices.
nombres.splice(1,3,'Emiliano Mariano') // En el índice 1 elimina 3 valores e inserta el string.
nombres.unshift('Fulano Cualquiera') // Inserta el valor al comienzo del array.
nombres.splice(5,0,'Albertoto Metiche') // Inserta el valor en el índice 5 desplazando el resto del array.
nombres.push('El último') // Inserta el valor al final del array.
numbers.splice(numbers.length, 0, '999') // Inserta el valor en el último índice del array sin borrar nada.

numbers.unshift('000')
numbers.push('walawalawala')
// pop: elimina el último elemento del array
let sacadaDelFinal = numbers.pop()
// shift: elimina el primer elemento del array
let sacadaDelComienzo = numbers.shift()

nombres.splice(nombres.length - 1, 0, sacadaDelFinal)
numbers.splice(numbers.length - 1, 0, sacadaDelComienzo)

showDom("array1", numbers)
showDom("array2", nombres)

// fill
const beers = [
    'erdinger',
    'corona',
    'delirium',
    'budwieser',
    'budlight'
];

showDom('cervezas', beers)
beers.fill('|| block ||', 0, beers.length - 3)
showDom('block1', beers)
beers.fill('|| block ||', 0, beers.length - 1)
showDom('block2', beers)
beers.fill('x', 0, beers.length)
showDom('x', beers)

// --- --- --- Metodos inmutables --- --- ---

// concat: concatena elementos
const colores = ['rojo', 'verde', 'azul']
const formas = ['cuadrado', 'triángulo', 'círculo']
const coloredShapes = formas.concat(colores)

//console.log(colores)
//console.log(formas)
//console.log(coloredShapes)

// concat: mascotas
let gia = {nombre: 'Gia', tipo: 'perro'}
let pipa = {nombre: 'Pipa', tipo: 'perro'}
let oracio = {nombre: 'Oracio', tipo: 'gato'}
let nina = {nombre: 'Nina', tipo: 'gato'}
let tomasio = {nombre: 'Tomasio', tipo: 'perro'}

const perros = []
const gatos = []

perros.push(gia.nombre, pipa.nombre, tomasio.nombre)
gatos.push(oracio.nombre, nina.nombre, 'Suki')

const mascotas = perros.concat(gatos)

showDom('perros', perros)
showDom('gatos', gatos)
showDom('mascotas', mascotas)


// slice
let sliceMascotas = mascotas
let slice1 = mascotas.slice(0,3)
let slice2 = mascotas.slice(3,mascotas.length)
let slice3 = mascotas.slice(2,-1)

let primerElemento = sliceMascotas.slice(0,1)
let ultimoElemento = sliceMascotas.slice(-1,sliceMascotas.length)

showDom('sliceMascotas', sliceMascotas)
showDom('slice1', slice1)
showDom('slice2', slice2)
showDom('slice3', slice3)

showDom('primerElemento', primerElemento)   // primer elemento
showDom('ultimoElemento', ultimoElemento)   // último elemento

//slice es INMUTABLE:
showDom('inmutable', sliceMascotas)


// spread
const numsToSpread1 = [1, 2, 3, 4]
const numsToSpread2 = [5, 5, 5, 5]
const numsToSpread3 = [100, 25, 300, 40]
const numsToSpread4 = [10, 20, 33, 44]

function sum(a,b,c,d){
    return [a + b + c + d]
}
// sumas sin operador SPREAD
// const suma1 = sum(numsToSpread1[0], numsToSpread1[1], numsToSpread1[2], numsToSpread1[3])
// const suma2 = sum(numsToSpread2[0], numsToSpread2[1], numsToSpread2[2], numsToSpread2[3])
// const suma3 = sum(numsToSpread3[0], numsToSpread3[1], numsToSpread3[2], numsToSpread3[3])
// const suma4 = sum(numsToSpread4[0], numsToSpread4[1], numsToSpread4[2], numsToSpread4[3])

// suma con operador SPREAD
const suma1 = sum(...numsToSpread1)
const suma2 = sum(...numsToSpread2)
const suma3 = sum(...numsToSpread3)
const suma4 = sum(...numsToSpread4)

showDom('numeros1', numsToSpread1)
showDom('suma1', suma1)
showDom('numeros2', numsToSpread2)
showDom('suma2', suma2)
showDom('numeros3', numsToSpread3)
showDom('suma3', suma3)
showDom('numeros4', numsToSpread4)
showDom('suma4', suma4)

// concatenación con operador SPREAD
const concat1 = [...numsToSpread1.concat(...numsToSpread2)]
const concat2 = [...numsToSpread1, ...numsToSpread2, ...numsToSpread3]
const concat3 = [...numsToSpread3, ...numsToSpread4, ...numsToSpread2, ...numsToSpread1]
const catsdogs = [...perros, ...gatos];

showDom('concat1', concat1);
showDom('concat2', concat2);
showDom('concat3', concat3);
showDom('perrosygatos', catsdogs);

// asignación con operador SPREAD
const numbers1 = [1, 2, 3, 4]
const numbers2 = numbers1
const numbers3 = [...numbers1]

// numbers1 y numbers2 apuntan a la misma referencia. Modificando uno automáticamente modificamos el otro.
numbers1[0] = 999
numbers2[3] = 999
// numbers3 es una copia independiente (usando ...spred operator).
numbers3[0] = 777
numbers3[1] = '¿?'
numbers3[2] = '¡!'
numbers3[3] = 333

showDom('numbers1', numbers1)
showDom('numbers2', numbers2)
showDom('numbers3', numbers3)


//

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

showDomObjs('allBeers', allBeers)
showDomForOf('forofbeers', allBeers)