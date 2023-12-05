// operador SPREAD
// Toma un arreglo y lo descompone en sus elementos individuales para que la función pueda recibirlos y asignarlos a sus parámetros correspondientes.

const numeros = [1, 2, 3];


function sumar(x,y,z){
    return x + y + z
}

// con indice del array:
console.log(sumar(numeros[0],numeros[1],numeros[2]));
// con operador spread:
console.log(sumar(...numeros));

console.log(numeros);
console.log(...numeros);