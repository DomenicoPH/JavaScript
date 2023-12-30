// Métodos - https://youtube.com/playlist?list=PLRBma32phT7gswvaDSe8Agpf14XL58OoD&si=xhZGWfzNzG41Cbmt

/* Filter */

const arreglo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//múltiplo de X
const multiploDE2 = arreglo.filter(value => value % 2 === 0);
const multiploDE3 = arreglo.filter(value => value % 3 === 0);
const multiploDE8 = arreglo.filter(value => value % 8 === 0);

console.log(multiploDE2);
console.log(multiploDE3);
console.log(multiploDE8);

//mayores de X
const mayoresDE4 = arreglo.filter(value => value > 4);
const mayoresDE6 = arreglo.filter(value => value > 6);
const mayoresDE8 = arreglo.filter(value => value > 8);

console.log(mayoresDE4)
console.log(mayoresDE6)
console.log(mayoresDE8)


//--con--arreglos--de--objetos-->

const candidatos = [
    {
        nombre: 'Juan Perez',
        edad: 16
    },
    {
        nombre: 'Pepita de Mango',
        edad: 19
    },
    {
        nombre: 'Angustias Paniagua',
        edad: 80
    },
    {
        nombre: 'Fiera Tristona',
        edad: 15
    },
    {
        nombre: 'Enano Loco',
        edad: 25
    },
    {
        nombre: 'Josefo Cuchipandas',
        edad: 11
    }
];

//filtros:

const mayoresDE18 = candidatos.filter(candidato => candidato.edad >= 18);
console.log(mayoresDE18)

const menoresDE18 = candidatos.filter(candidato => candidato.edad < 18);
console.log(menoresDE18)

console.log(candidatos.filter(candidato => candidato.nombre.includes('Loco')))
console.log(candidatos.filter(candidato => candidato.nombre.includes('Cuchipan')))
console.log(candidatos.filter(candidato => candidato.nombre.includes('Ang')))
console.log(candidatos.filter(candidato => candidato.nombre.length > 17))
console.log(candidatos.filter(candidato => candidato.nombre.length > 14))
console.log(candidatos.filter(candidato => candidato.nombre.length > 10))
console.log(candidatos.filter(candidato => candidato.nombre.length > 20))


// nombres
const nombres = ['Pablo', 'Carlos', 'Ana', 'Pedro', 'Lucía', 'Valeria']

const nombresConMasDe3letras = nombres.filter(nombre => nombre.length > 3);
console.log(nombresConMasDe3letras);

const nombresConMasDe6letras = nombres.filter(nombre => nombre.length > 6);
console.log(nombresConMasDe6letras);