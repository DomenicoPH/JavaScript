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