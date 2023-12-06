// Crear objetos de forma concisa

const crearPersona = (nombre, edad, idioma) => {
    return {
        nombre: nombre,
        edad: edad,
        idioma: idioma
    }
};
let juan = crearPersona('Juan', 23, 'español')
let ming = crearPersona('Ming', 45, 'chino')
let lucca = crearPersona('Lucca', 18, 'italiano')

console.log(juan);
console.log(ming);
console.log(lucca);

console.log(juan.nombre, juan.edad);
console.log(ming.nombre, ming.edad);
console.log(lucca.nombre, lucca.edad);


const crearMascota = (nombre, especie, edad) => ({nombre, especie, edad});
let gia = crearMascota('Gia','perro',6);
let king = crearMascota('King','iguana',2);
let oracio = crearMascota('oracio','gato',8);
let gustavo = crearMascota('Gustavo','canario',10);

console.log(gia);
console.log(king);
console.log(oracio);
console.log(gustavo);