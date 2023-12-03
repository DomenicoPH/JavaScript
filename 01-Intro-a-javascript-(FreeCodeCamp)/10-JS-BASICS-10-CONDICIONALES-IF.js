// Condicionales

// if | else if | else ------------------------------------------------------------------ if | else if | else

// ex. true
console.log('-TRUE-')
if(true){
    console.log('this is true')
} else {
    console.log('this is false')
};

// ex. false
console.log('-FALSE-')
if(false){
    console.log('this is true')
} else {
    console.log('this is false')
};

// ex. (x > 2) -> x = 5 | La condición es verdadera
console.log('--- Ex. (x > 2) -> x = 5 | La condición es verdadera ---');
var x = 5
if (x > 2){
    console.log('la condición es verdadera')
} else {
    console.log('la condición es falsa');
};

if (x > 2 && x < 10){
    console.log('la condición es verdadera')
} else {
    console.log('la condición es falsa')
}

// ex. (x > 2) -> x = 0 | La condición es falsa
console.log('--- Ex. (x > 2) -> x = 0 | La condición es falsa ---')
var x = 0
if (x > 2){
    console.log('la condición es verdadera')
} else {
    console.log('la condición es falsa');
};

if (x > 2 && x < 10){
    console.log('la condición es verdadera')
} else {
    console.log('la condición es falsa')
}

// etaciones
var estacion = 'Verano';
if (estacion == 'Primavera'){
    console.log('Es primavera');
} else if (estacion == 'Verano'){
    console.log('Es verano');
} else if (estacion == 'Invierno') {
    console.log('Es invierno')
} else if (estacion == 'Otoño'){
    console.log('Es otoño');
} else {
    console.log('El valor de estación no corresponde a ninguna de las 4 estaciones... mala suerte.');
}

// En una función
function seasons(estacion){
    if (estacion == 'Primavera'){
        console.log('Es primavera');
    } else if (estacion == 'Verano'){
        console.log('Es verano');
    } else if (estacion == 'Invierno') {
        console.log('Es invierno')
    } else if (estacion == 'Otoño'){
        console.log('Es otoño');
    } else {
        console.log('El valor de estación no corresponde a ninguna de las 4 estaciones... mala suerte.');
    }
}

console.log('-- Testing --');
seasons('Verano');
seasons('Invierno');
seasons('zapatilla');

// + Con funciones
function clasificarValor(valor){
    if (valor % 2 == 0){
        console.log(' - Divisible entre 2 - ');
    } else if (valor % 3 == 0){
        console.log(' - Divisible entre 3 - ');
    } else {
        console.log(' - No es divisible entre 2 ni entre 3 - ')
    }
};

clasificarValor(20);
clasificarValor(15);
clasificarValor(7);

function analizarValor(valor){
    if (valor < 5){
        console.log('El valor es menor que 5');
    } else if (valor < 10){
        console.log('El valor es mayor que 5 y menor que 10');
    } else {
        console.log('El valor es mayor o igual que 10')
    }
}

analizarValor(4);
analizarValor(8);
analizarValor(12);


// Encadenar sentencias if...
function interpretarIMC(indiceMasaCorp){
    if (indiceMasaCorp < 18.5){
        console.log('Bajo Peso');
        return 'Bajo Peso'
    } else if (indiceMasaCorp <= 24.9){
        console.log('Peso Normal');
        return 'Peso Normal'
    } else if (indiceMasaCorp <= 29.9){
        console.log('Sobrepeso');
        return 'Sobrepeso'
    } else {
        console.log('Obesidad');
        return 'Obesidad'
    }
}
// testing
console.log('--- Interpretar Índice de masa corporal de:');
var pedro = interpretarIMC(15)
var ana = interpretarIMC(20)
var maria = interpretarIMC(25)
var juan = interpretarIMC(30)

console.log('Pedro:', pedro)
console.log('ana:', ana)
console.log('maria:', maria)
console.log('juan:', juan)


// if | else if | else ------------------------------------------------------------------ Golf

function puntajesGolf(par,golpes){
    // 'par' y 'golpes' son números y positivos
    if (golpes === 1){
        return 'Hole-in-one!';
    } else if (golpes <= par - 2){
        return 'Eagle';
    } else if (golpes === par - 1){
        return 'Birdie';
    } else if (golpes === par){
        return 'Par';
    } else if (golpes === par + 1){
        return 'Bogey';
    } else if (golpes === par + 2){
        return 'Double Bogey';
    } else if (golpes >= par + 3) {
        return 'Go Home!'
    }
}

console.log(puntajesGolf(4,4));
console.log(puntajesGolf(5,1));
console.log(puntajesGolf(9,11));
console.log(puntajesGolf(6,10));