// Operaciones aritméticas----------------------------------------->>
console.log('Operaciones aritméticas:');

// Suma
var suma = 7 + 13;
console.log('Suma: ', suma);    //20
suma += 10
console.log('Suma: ', suma);    //30

// Resta
var resta = 15 - 5;
console.log('Resta: ', resta);  //10
resta -= 20
console.log('Resta: ', resta);  //-10

// Multiplicación
var producto = 10 * 3;
console.log('Producto: ', producto);    //30
producto *= 0;
console.log('Producto: ', producto);    //0
producto = -5 * 6;
console.log('Producto: ', producto);    //-30

// División
var cociente = 100 / 2;
console.log('Cociente: ', cociente);    //50
cociente /= 2;
console.log('Cociente: ', cociente);    //25
cociente = 17 / 31;
console.log('Cociente: ', cociente);    //0.54838...
cociente = 3 / 0;
console.log('Cociente: ', cociente);    //Infinity


// Números decimales----------------------------------------------->>

var miNumeroDecimal = 2.5;
var peso = 75.25;
var altura = 1.78;
console.log(' ');

console.log('Suma con decimales:');
var sumaDecimal = 5.3 + 3.2;
console.log(sumaDecimal);
sumaDecimal = 50 + 10.5;
console.log(sumaDecimal);

console.log('Resta con decimales:');
var restaDecimal = 4.5 - 3.5;
console.log(restaDecimal);
restaDecimal = 100 - 40.25;
console.log(restaDecimal);

console.log('Multiplicación con decimales:');
var productoDecimal = 10.4 * 6.5;
console.log(productoDecimal);
productoDecimal = 10.5 * 4;
console.log(productoDecimal);
productoDecimal = 35 * 4.2;
console.log(productoDecimal);
productoDecimal = 3.5 * 0;
console.log(productoDecimal);
productoDecimal = -5.7 * 3.4;
console.log(productoDecimal);

console.log('División con decimales:');
var cocienteDecimal = 5.0 / 2.0;
console.log(cocienteDecimal);
cocienteDecimal = 2.3 / 6.7;
console.log(cocienteDecimal);
cocienteDecimal = 4.2 / 0.0;
console.log(cocienteDecimal);


// Resto----------------------------------------------->>
console.log('Resto de la división:');

var resto = 15 % 5;
console.log('Resto Demo : ', resto);
resto = 5 % 1
console.log('Resto 5 % 1: ', resto);
resto = 5 % 2
console.log('Resto 5 % 2: ', resto);
resto = 5 % 3
console.log('Resto 5 % 3: ', resto);
resto = 5 % 4
console.log('Resto 5 % 4: ', resto);
resto = 5 % 5
console.log('Resto 5 % 5: ', resto);