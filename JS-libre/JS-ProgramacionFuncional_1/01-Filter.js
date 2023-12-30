// https://youtube.com/playlist?list=PLSnadb41DsdKMddToNitoXrgHK7CEbUki&si=ysiR27rOrNbqZrjm

// FILTER
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const mascotas = [
    {nombre: 'Puchini', edad: 12, raza: 'perro'},
    {nombre: 'Chachito', edad: 3, raza: 'perro'},
    {nombre: 'Pulga', edad: 10, raza: 'perro'},
    {nombre: 'Pelusa', edad: 16, raza: 'gato'},
];

console.log(mascotas,numeros)

// --- numeros --- //

const numerosFiltrados = numeros.filter(num => num < 5)
console.log(numerosFiltrados);

const middleNumbers = numeros.filter(num => num > 3 && num < 7)
console.log(middleNumbers);
const middleNumber = numeros.filter(num => num === 5)
console.log(middleNumber);

const secondHalf = numeros.filter(num => num > 5)
console.log(secondHalf);

// --- mascotas --- //

const perros = mascotas.filter(mascota => mascota.raza == 'perro')
console.log(perros)

const gatos = mascotas.filter(mascota => mascota.raza == 'gato')
console.log(gatos)


//

const criaturas = [
    {nombre: 'Juan', apellido: 'Perez', edad: 18, especie: 'humano'},
    {nombre: 'Pets', apellido: 'Yul', edad: 86, especie: 'marciano'},
    {nombre: 'Lombriz', apellido: 'Deparis', edad: 1, especie: 'lombriz'},
    {nombre: 'Red', apellido: 'Rax', edad: 30, especie: 'primek'},
    {nombre: 'Pedro', apellido: 'Paramo', edad: 32, especie: 'humano'},
    {nombre: 'Sam', apellido: 'Cucaracha', edad: 600, especie: 'gran-cucaracha'},
    {nombre: 'Flora', apellido: 'Ortigas', edad: 40, especie: 'planta'},
    {nombre: 'Anthrax', apellido: 'Cucaracha', edad: 950, especie: 'gran-cucaracha'},
    {nombre: 'Domenico', apellido: 'Pagano', edad: 37, especie: 'humano'},
    {nombre: 'Gigas', apellido: 'Baltrax', edad: 78, especie: 'marciano'},
]

console.log(criaturas)

const humans = criaturas.filter(criatura => criatura.especie === 'humano');
const martians = criaturas.filter(criatura => criatura.especie === 'marciano');
const groaches = criaturas.filter(criatura => criatura.especie === 'gran-cucaracha');
const roaches = criaturas.filter(criatura => criatura.especie === 'cucaracha'); // No existe la especie 'cucaracha'

console.log(humans)
console.log(martians)
console.log(groaches)
console.log(roaches)    // Retorna un array vacio

console.log('Criaturas de tipo planta')
console.log(criaturas.filter(criatura => criatura.especie === 'planta'))
console.log('Criaturas de nombre Domenico')
console.log(criaturas.filter(criatura => criatura.nombre === 'Domenico'))
console.log('Criaturas cuya edad es mayor de 100')
console.log(criaturas.filter(criatura => criatura.edad >= 100))
console.log('Criaturas de apellido Cucaracha')
console.log(criaturas.filter(criatura => criatura.apellido === 'Cucaracha'))

let test = criaturas.filter(function (criatura){
    if(criatura.apellido === 'Cucaracha'){
        console.log(criatura.nombre)
        return criatura.nombre
    }
})
console.log(test)   // Retorna el elemento completo, no el nombre como se indica con 'return criatura.nombre'

let reTest = criaturas
  .filter(function (criatura){  // FILTER | Filtramos criaturas y obtenemos un array con los objetos que contengan criaturas con apellido 'Cucaracha'
    return criatura.apellido === 'Cucaracha';
  })
  .map(function (criatura) {    // MAP | Mapeamos el nuevo array de objetos y retornamos el nombre de cada criatura
    return criatura.nombre;
  });

console.log(reTest);
