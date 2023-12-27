// Arrays

var ciudades = ['Madrid', 'Valencia', 'Barcelona', 'Sevilla'];

// 1. includes

// --- includes | testing 1
let isBarcelona = ciudades.includes('Barcelona')
console.log(isBarcelona)

let isValencia = ciudades.includes('Valencia')
console.log(isValencia)

let isPalencia = ciudades.includes('Palencia')
console.log(isPalencia)


// --- includes | testing 2
console.log(ciudades.includes('Sevilla'))
console.log(ciudades.includes('Toledo'))

// --- includes | testing 3
function cityTest(ciudad){
    if(ciudades.includes(ciudad)){
        return `(√!) ${ciudad} está en la lista`
    } else {
        return `(X!) ${ciudad} no está en la lista`
    }
}
console.log(cityTest('Lima'))
console.log(cityTest('Roma'))
console.log(cityTest('Valencia'))
console.log(cityTest('Madrid'))


// 2. find
var encontrada = ciudades.find(function(ciudad){
    return ciudad[0] === 'B'
})

console.log(encontrada)

// función que usa find
function buscaCity(letra){
    let response
    ciudades.find((ciudad) => {
        if(ciudad[0] === letra){
            response = ciudad
        }
    })
    if(response === undefined){
        response = `No hay ciudades que empiecen con ${letra}`
    }
    return response
};

console.log(buscaCity('B'))
console.log(buscaCity('A'))
console.log(buscaCity('V'))
console.log(buscaCity('J'))
console.log(buscaCity('M'))


// ......................................................

var ciudades = [
    {
        name: 'Madrid',
        population: '3M',
        country: 'Spain'
    },
    {
        name: 'Paris',
        population: '10M',
        country: 'France'
    },
    {
        name: 'Florianópolis',
        population: '600k',
        country: 'Brasil'
    }
]

var ciudadBuscada = ciudades.find((ciudad) => {
    return ciudad.name === 'Paris'
})

if(ciudadBuscada){
    console.log(ciudadBuscada.population)
} else {
    console.log(`No se encontró la ciudad buscada`)
}


// Función buscaCiudad...................................

function buscaCiudad(ciudadbuscada){
    let encontrada
    ciudades.find(ciudad => {
        if(ciudad.name === ciudadbuscada){
            encontrada =  ciudad
        }
    })
    if(encontrada){
        return {
            ciudad: encontrada.name,
            pop: encontrada.population
        }
    } else {
        return 'No se encontró la ciudad buscada'
    }
};

// ......................................................

//--SI
console.log(buscaCiudad('Paris'))
console.log(buscaCiudad('Florianópolis'))
console.log(buscaCiudad('Madrid'))
//--NO
console.log(buscaCiudad('Lima'))
console.log(buscaCiudad('Barcelona'))
console.log(buscaCiudad('Bogotá'))