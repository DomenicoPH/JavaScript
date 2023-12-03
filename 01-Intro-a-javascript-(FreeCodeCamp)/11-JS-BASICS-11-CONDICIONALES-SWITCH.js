// Switch

// Ex.1
function clasificarValor(valor){
    var respuesta;
    switch(valor){
        case 1:
            respuesta = 'alpha';
            break;
        case 2:
            respuesta = 'beta';
            break;
        case 3:
            respuesta = 'gamma';
            break;
        case 4:
            respuesta = 'delta';
            break;
        default:
            respuesta = null
    }
    return respuesta;
}
// testing
console.log(clasificarValor(1));
console.log(clasificarValor(2));
console.log(clasificarValor(3));
console.log(clasificarValor(4));
console.log(clasificarValor(5));


// Ex.2
var prodTEST = 'hamburguesa'

switch (prodTEST) {
    case 'pizza':
        console.log('La pizza personal cuesta $5.90');
        break;
    case 'hamburguesa':
        console.log('La hamburguesa simple cuesta $6.50');
        break;
    case 'helado':
        console.log('El helado simple cuesta $2.00');
        break;
};
console.log('--end-of-switch--');

// dentro de una función
function pizzas(pizza){
    switch (pizza) {
        case 1:
            return {
                producto: 'Pizza Americana',
                ingredientes: {
                    1: 'masa',
                    2: 'salsa de tomate',
                    3: 'queso mozzarela',
                    4: 'jamón York'
                },
                precio: {
                    personal: '$5.90',
                    mediana: '$10.90',
                    grande: '$18.90',
                    gigante: '$25.00'
                }
            }
        case 2:
            return {
                producto: 'Pizza Pepperoni',
                ingredientes: {
                    1: 'masa',
                    2: 'salsa de tomate',
                    3: 'queso mozzarela',
                    4: 'pepperoni'
                },
                precio: {
                    personal: '$5.90',
                    mediana: '$10.90',
                    grande: '$18.90',
                    gigante: '$25.00'
                }
            }
        case 3:
            return {
                producto: 'Pizza Vegetariana',
                ingredientes: {
                    1: 'masa',
                    2: 'salsa de tomate',
                    3: 'queso mozzarela',
                    4: 'aceitunas verdes',
                    5: 'cebolla'
                },
                precio: {
                    personal: '$5.90',
                    mediana: '$10.90',
                    grande: '$18.90',
                    gigante: '$25.00'
                }
            }
        case 4:
            return {
                producto: 'Pizza Full Meat',
                ingredientes: {
                    1: 'masa',
                    2: 'salsa de tomate',
                    3: 'queso mozzarela',
                    4: 'carne de res',
                    5: 'chorizo',
                    6: 'pepperoni'
                },
                precio: {
                    personal: '$6.90',
                    mediana: '$12.90',
                    grande: '$21.90',
                    gigante: '$28.00'
                }
            }
        case 5:
            return {
                producto: 'Pizza All Stars',
                ingredientes: {
                    1: 'masa',
                    2: 'salsa de tomate',
                    3: 'queso mozzarela',
                    4: 'queso parmesano',
                    5: 'jamón York',
                    6: 'chorizo',
                    7: 'pepperoni',
                    8: 'cebolla',
                    9: 'pimientos'
                },
                precio: {
                    personal: '$8.90',
                    mediana: '$15.90',
                    grande: '$25.90',
                    gigante: '$30.00'
                }
            }
        default:
            return 'La pizza seleccionada no está en nuestra carta'
    };
}

/* Carta:
( Para acceder a la información intruduce el 
  número de tu pizza favorita en la función )
  1 . Americana
  2 . Vegetariana
  3 . Pepperoni
  4 . Full Meat *
  5 . All Stars *
  -------------------------------------------
    (*) Special Pizza
*/

// testing
const miPedido001 = ['Pedido 001', pizzas(1)]
console.log(miPedido001);

const miPedido002 = ['Pedido 002', pizzas(5)]
console.log(miPedido002);

const miPedido003 = ['Pedido 003', pizzas(7)]
console.log(miPedido003);

// idiomas
// Ex. A (Utiliza una variable y luego la retorna, requiere break para saltar al return cuando encuentre la coincidencia)
function seleccionarIdiomaVA(valor){
    var idioma;
    switch (valor) {
        case 1:
            idioma = 'Español'
            break;
        case 2:
            idioma = 'Francés'
            break;
        case 3:
            idioma = 'Italiano'
            break;
        default:
            idioma = 'Inglés'
            break;
    }
    return idioma;
}
// testing
console.log(seleccionarIdiomaVA(1));
console.log(seleccionarIdiomaVA(3));
console.log(seleccionarIdiomaVA(7));

// Ex. B (En esta versión se hace switch con el parámetro)
function seleccionarIdiomaVB(idioma){
    switch (idioma) {
        case 1:
            idioma = 'Español'
            return idioma;
        case 2:
            idioma = 'Francés'
            return idioma;
        case 3:
            idioma = 'Italiano'
            return idioma;
        default:
            idioma = 'Inglés'
            return idioma;
    }
}
// testing
console.log(seleccionarIdiomaVB(1));
console.log(seleccionarIdiomaVB(3));
console.log(seleccionarIdiomaVB(7));

function volumen(vol){
    switch(vol){
        case 0:
         return 'off ()'
        case 1:
        case 2:
         return 'bajo (-)'
        case 3:
        case 4:
        case 5:
         return 'medio (--)'
        case 6:
        case 7:
        case 8:
         return 'alto (---)'
        case 9:
        case 10:
         return 'muy alto (----)'
        }
}
// testing
console.log('-- volume state --');
console.log('Vol|0: \n', volumen(0));
console.log('Vol|1: \n', volumen(1));
console.log('Vol|2: \n', volumen(2));
console.log('Vol|5: \n', volumen(5));
console.log('Vol|8: \n', volumen(8));
console.log('Vol|10: \n', volumen(10));
console.log('Vol|12: \n', volumen(12));


// ► Retornar valores booleanos...

// ...con un condicional if
function esMenorQueIf(a,b){
    if (a < b){
        return true;
    } else {
        return false;
    }
};
    // testing
    console.log('Es menor que (usando if) -->', esMenorQueIf(10,100));

//...forma simplificada
function esMenorQue(a,b){
    return a < b;
}
    // testing
    console.log('Es menor que (simplificado) -->', esMenorQue(10,100));


    // ► Patrón de retorno anticipado...

function funcionDePrueba(){
    console.log('Hola!');
    return 'Mundo'
    console.log('Adios!');
}
//funcionDePrueba()
console.log('[',funcionDePrueba(),']');

function funcionDePrueba2(){
    console.log('Esto');
    console.log('es');
    console.log('una');
    console.log('prueba');
    console.log('de');
    return 'STOP ----- CORTE'
    console.log('que');
    console.log('return');
    console.log('corta!');
}
//funcionDePrueba2();
console.log('[',funcionDePrueba2(),']')


// Calcular raíz cuadrada
function calcularRaizCuadrada(num){
    if (num < 0){
        return undefined;
    } else {
        return Math.sqrt(num);
    }
};
console.log(calcularRaizCuadrada(4));
console.log(calcularRaizCuadrada(-4));
console.log(calcularRaizCuadrada(36));
console.log(calcularRaizCuadrada(25));
console.log(calcularRaizCuadrada(16));

var count = 0;
function contarCartas(carta){
    var decision;
    switch(carta){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--
            break;
    }
    if (count > 0){
        decision = 'Apostar'
    } else {
        decision = 'Esperar'
    }
    return count + ' ' + decision;
}

console.log(contarCartas(2))
console.log(contarCartas(5))
console.log(contarCartas('A'))
console.log(contarCartas(10))
console.log(contarCartas(7))
console.log(contarCartas('K'))
console.log(contarCartas(3))
console.log(contarCartas(2))