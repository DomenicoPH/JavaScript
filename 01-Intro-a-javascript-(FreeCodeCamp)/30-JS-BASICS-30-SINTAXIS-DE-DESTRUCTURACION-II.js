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