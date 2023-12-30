// https://youtube.com/playlist?list=PLSnadb41DsdKMddToNitoXrgHK7CEbUki&si=ysiR27rOrNbqZrjm

// REDUCE

/*  Reducer nos permite crear funciones Reducer.
    Reducer recibe dos argumentos:
    El primero es un valor que se acumula (acc).
    El segundo es el elemento que se esta iterando en el array (el).
    Retorna el nuevo elemento que se acumula.   */

// Sintaxis: const reducer = (acumulador, valorActual) => nuevoAcumulador

const numeros = [1, 2, 3, 4, 5];

const mascotas = [
    { nombre: 'Pelusa', edad: 12, tipo: 'gato' },
    { nombre: 'Puchini', edad: 12, tipo: 'perro' },
    { nombre: 'Pulga', edad: 10, tipo: 'perro' },
    { nombre: 'Chanchito feliz', edad: 3, tipo: 'perro' },
];

const anidado = [1, [2, 3], 4, [5]];

// ---

const reducidoVacio = [].reduce((acc, el) => acc + el, 0)
console.log(reducidoVacio)

const reduxUno = [ 'a', 'b', 'c', 'd', 'e' ].reduce((acc, el) => acc + el, 0)
console.log(reduxUno)

//numeros --> .reduce para la suma de los elementos de un arreglo.
const reduxNums = numeros.reduce((acc, el) => acc + el, 0)
console.log(reduxNums)

//mascotas --> 
const indexed = mascotas.reduce((acc, el) => ({
    ...acc,
    [el.nombre]: el,
}),{});

console.log('>> Mascotas indexadas: ', indexed)
console.log('>> Esta es Pelusa: ', indexed['Pelusa'])
console.log('>> Este es Chanchito feliz: ', indexed['Chanchito feliz'])
console.log('>> Esta es Pulga: ', indexed['Pulga'])

//anidado -->
const plano = anidado.reduce((acc, el) => acc.concat(el),[])
console.log(plano)

const anidadoDos = [[1, 2, 3, 4],['a', 'b', 'c', 'd']]
console.log(anidadoDos)
const planoDos = anidadoDos.reduce((acc, el) => acc.concat(el),[])
console.log(planoDos)

//Reducir niveles ->

const anidadoFinal = [1, [2, 3, 4], [5, 6, [7]], 8, [9, [10, [11, [12]]]]];

//const planoFinal = anidadoFinal.reduce((acumulador, element) => acumulador.concat(element), []).reduce((acumulador, element) => acumulador.concat(element), []).reduce((acumulador, element) => acumulador.concat(element), []).reduce((acumulador, element) => acumulador.concat(element), [])

const nivelador = (acumulador, element) => acumulador.concat(element)
const planoFinal = anidadoFinal.reduce(nivelador,[]).reduce(nivelador,[]).reduce(nivelador,[]).reduce(nivelador,[]);

console.log(anidadoFinal)
console.log(planoFinal)