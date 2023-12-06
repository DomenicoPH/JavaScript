// Sintaxis de destructuración - operador REST
console.log('Ex. 1');
var a;
var b;

[a, b, ...arr ] = [1, 2, 3, 4, 5, 6, 7]
console.log(a);
console.log(b);
console.log(arr);

// remover los 3 primeros:
console.log('Ex. 2');
const arregloInicial = [1, 2, 3, 4, 5, 6, 7, 8];
function removerTresPrimeros(arr){
    const [ , , , ...nuevoArr] = arr
    return nuevoArr
}
let resultadoNuevoArr = removerTresPrimeros(arregloInicial)
console.log(resultadoNuevoArr)


// Sintaxis de destructuración - Pasar Objeto como Argumento
var nuevoPerfilCliente = {
    nombre: 'Jane Doe',
    edad: 24,
    nacionalidad: 'Española',
    ubicacion: 'España',
}

const actualizarPerfil = (informacionDePerfil) => {
    const {nombre, edad, nacionalidad, ubicacion} = informacionDePerfil;
    console.log(nombre);
    console.log(edad);
    console.log(nacionalidad);
    console.log(ubicacion);
        //console.log(informacionDePerfil);
}
actualizarPerfil(nuevoPerfilCliente);

const actualizarPerfil2 = ({nombre, edad, nacionalidad, ubicacion}) => {
    console.log(nombre);
    console.log(edad);
    console.log(nacionalidad);
    console.log(ubicacion);
}

actualizarPerfil2(nuevoPerfilCliente)

const USERS = [
    {
        id: 1,
        name: 'Domenico',
        lastname: 'Pagano',
        age: 37,
        gender: 'male',
        specie: 'mutant'
    },
    {
        id: 2,
        name: 'Graciela',
        lastname: 'Valderrama',
        age: 36,
        gender: 'female',
        specie: 'princess'
    },
    {
        id: 3,
        name: 'Gia',
        lastname: 'Perrito',
        age: 6,
        gender: 'female',
        specie: 'hot-dog'
    }
];

let user1 = USERS[0];
let user2 = USERS[1];
let user3 = USERS[2];
const presentarUsuarios = ({id, name, lastname, age, gender, specie}) => {
    const heshe = (gender) => {
        if(gender === 'male') return 'he'
        if(gender === 'female') return 'she'
    }
    return `The ${gender} user ${name} ${lastname} with id:${id} is ${age} years old and ${heshe(gender)} is a ${specie}`
}

console.log(presentarUsuarios(user1))
console.log(presentarUsuarios(user2))
console.log(presentarUsuarios(user3))

//---//

const estadisticas = {
    max: 56.78,
    desviacionEstandar: 4.34,
    mediana: 34.54,
    moda: 23.87,
    min: -0.75,
    promedio: 35.85
};

const puntoMedio = ({max, min}) => (max + min) / 2.0;
console.log(puntoMedio(estadisticas))