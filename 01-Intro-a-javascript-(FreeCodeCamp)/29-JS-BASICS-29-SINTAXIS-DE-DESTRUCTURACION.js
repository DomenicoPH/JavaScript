// Sintaxis de destructuración

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

