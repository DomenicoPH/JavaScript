// const (constante: variable inmutable)

// 1. No se puede reasignar el valor de una constante
const miConstante = 35;
console.log(miConstante);
// miConstante = 15    // ERROR: No se puede reasignar el valor de una constante

// 2. No se puede declarar una constante sin asignarle un valor.
/* 

    const miSegundaConstante;
    miSegundaConstante = 36

*/
const miSegundaConstante = 36;
console.log(miSegundaConstante);

// 3. Sintaxis de una constante
const MI_CONSTANTE = 37
console.log(MI_CONSTANTE);


// 4. Constantes para valores QUE NO DEBEN CAMBIAR
function calcularAreaCirculo(radio){
    const PI = 3.1416;
    if (radio < 0){
        return undefined
    }
    return PI * (radio ** 2)
};
console.log(calcularAreaCirculo(2));
console.log(calcularAreaCirculo(4));
console.log(calcularAreaCirculo(6));


// 5. (ARRAY) Mutar arreglo declarado con const...
const MI_ARREGLO = [1, 2, 3, 4];
// MI_ARREGLO = [5, 6, 7, 8]; // ERROR
console.log('Mi arreglo vale: ',MI_ARREGLO)
MI_ARREGLO[0] = 5;
MI_ARREGLO[1] = 6;
MI_ARREGLO[2] = 7;
MI_ARREGLO[3] = 8;
console.log('Mi arreglo vale: ',MI_ARREGLO)

/*  Con const no podemos reasignar el valor total del dato declarado con const.
    Podemos, sin embargo, cambiar sus subelementos uno por uno.
*/


// 6. (OBJECT) Crear un objeto inmutable
let colores = {
    'verde':'#10e04b',
    'azul':'#1b50e0',
    'negro':'#000000',
    'blanco':'#ffffff',
};
    colores.amarillo = 'amarillo si!'

Object.freeze(colores); //-----------------------> freeze!

    colores.rojo = 'rojo no!'
    delete colores.verde;
    delete colores.blanco;
    
// Únicamente las modificaciones hechas al objeto antes de Object.freeze(colores) tendrán efectos
console.log(colores);
