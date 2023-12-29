// MAP
const suma = (ns) => {
    let acumulado = 0
    for(let i=0; i < ns.length; i++){
        acumulado += ns[i]
    }
    return acumulado
}

//---

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numeros)

const multiplicadosX2 = numeros.map(x => x * 2)
console.log(multiplicadosX2)
const multiplicadosX3 = numeros.map(x => x * 3)
console.log(multiplicadosX3)
const multiplicadosX4 = numeros.map(x => x * 4)
console.log(multiplicadosX4)

const parejas = numeros.map(x => [x,x])
console.log(parejas)
const tercias = numeros.map(x => [x,x,x])
console.log(tercias)

//---

const mascotas = [
    {nombre: 'Puchini', edad: 12, tipo: 'perro'},
    {nombre: 'Chachito', edad: 3, tipo: 'perro'},
    {nombre: 'Pulga', edad: 10, tipo: 'perro'},
    {nombre: 'Pelusa', edad: 12, tipo: 'gato'},
];

// suma..
const resultadoNumeros = suma(numeros)
console.log(resultadoNumeros)

// promedio de edades...
const edades = mascotas.map(mascota => mascota.edad)
    console.log(edades)
const sumaEdades = suma(edades)
    console.log(sumaEdades)
const promedio = sumaEdades / edades.length
    console.log(promedio)