// Sintaxis de destructuración - Objetos

const usuario = {
    nombre: 'Domenico Pagano',
    edad: 37
}
/* Asignar props de un objeto a variables:
    const nombre = usuario.nombre;
    const edad = usuario.edad;
    console.log(nombre);
    console.log(edad);
*/

// con destructuring:
const {nombre, edad} = usuario
console.log(nombre);
console.log(edad);

//---//

var coordenadas = {
    x:4,
    y:6,
    z:12
}
/* antes:
   var x = coordenadas.x
   var y = coordenadas.y
   var z = coordenadas.z
*/
const {x, y, z} = coordenadas;
console.log(x); console.log(y); console.log(z);

//---//

// Sintaxis de destructuración: objetos anidados

const user = {
    dom: {
        name: 'Domenico',
        lastname: 'Pagano',
        age: 37,
        email: 'dpaganoh@gmail.com',
        active: true
    },
    gra: {
        name: 'Graciela',
        lastname: 'Valderrama',
        age: 36,
        email: 'tita@gmail.com',
        active: true
    }
}
const {dom: { name, lastname, age, email, active }} = user;
console.log(name);
console.log(lastname);
console.log(age);
console.log(email);
console.log(active);


// función que obtiene data del objeto
const gimmeData = (obj,user) => {
    return `${obj[user].name} ${obj[user].lastname} tiene ${age} años. Puedes escribirle a ${email}`
};
console.log(gimmeData(user,'dom'));
console.log(gimmeData(user,'gra'));


// asignando valores a nuevas variables
const {gra: {name:nameG, lastname:lastnameG, age:ageG, email: emailG,}} = user;
console.log(nameG);
console.log(lastnameG);
console.log('Fullname:',nameG, lastnameG, '- age:',ageG, '- email:',emailG);


// Ejemplo: pronostico local
const PRONOSTICO_LOCAL = {
    "ayer": {
        min: 61,
        max: 75
    },
    "hoy": {
        min: 64,
        max: 77
    },
    'mañana': {
        min: 68,
        max: 80
    }
};
// NO destructuring
const minAyer = PRONOSTICO_LOCAL.ayer.min
const maxAyer = PRONOSTICO_LOCAL.ayer.max

const minHoy = PRONOSTICO_LOCAL.hoy.min
const maxHoy = PRONOSTICO_LOCAL.hoy.max

const minMañana = PRONOSTICO_LOCAL.mañana.min
const maxMañana = PRONOSTICO_LOCAL.mañana.max

console.log('AYER =','Min:', minAyer, 'Max:', maxAyer);
console.log('HOY =','Min:', minHoy, 'Max:', maxHoy);
console.log('MAÑANA =','Min:', minMañana, 'Max:', maxMañana);


// Destructuring
console.log('Destructuring ---------------->')

const {ayer: {min: minimaAyer, max: maximaAyer}} = PRONOSTICO_LOCAL
console.log(`- Pronostico Ayer: min: ${minimaAyer} - max: ${maximaAyer}`)

const {hoy: {min: minimaHoy, max: maximaHoy}} = PRONOSTICO_LOCAL
console.log(`- Pronostico Hoy: min: ${minimaHoy} - max: ${maximaHoy}`)

const {mañana: {min: minimaMañana, max: maximaMañana}} = PRONOSTICO_LOCAL
console.log(`- Pronostico Mañana: min: ${minimaMañana} - max: ${maximaMañana}`)



// Sintaxis de destructuración - Arreglos

// Ex. 1
var a;
var b;
var c;

[a, b, c] = [1, 2, 3]

console.log(a);
console.log(b);
console.log(c);

console.log([a, b, c])

// Ex. 2
var d;
var e;

[d, e] = [1, 2, 3, 4, 5, 6]
console.log(d);
console.log(e);

// Ex. 3
var f;
var g;
var h;
var i;
var j;

[, f,, g,, h,, i,, j] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(f, g, h, i, j)

// Ex. 4 - intercambiar valores
var k = 8;
var l = 6;

console.log(k); console.log(l);
/* invertir */  [l, k] = [k, l]
console.log(k); console.log(l);