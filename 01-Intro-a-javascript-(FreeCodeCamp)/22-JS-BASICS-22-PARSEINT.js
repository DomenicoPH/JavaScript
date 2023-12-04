// 1. Función parseInt

// Convierte string a number : '5' -> 5
var cinco = '5'
console.log(typeof(cinco),cinco);
cinco = parseInt(cinco)
console.log(typeof(cinco),cinco);

var diez = '10'
console.log(typeof(diez),diez);
diez = parseInt(diez)
console.log(typeof(diez),diez);

var diezNeg = '-10'
console.log(typeof(diezNeg),diezNeg);
diezNeg = parseInt(diezNeg)
console.log(typeof(diezNeg),diezNeg);

var cero = '0'
console.log(typeof(cero),cero);
cero = parseInt(cero)
console.log(typeof(cero),cero);

var decimal = '25.5'
console.log(typeof(decimal),decimal);
decimal = parseInt(decimal)
console.log(typeof(decimal),decimal);

// NaN : Not a Number
console.log(parseInt('abc'));       // Not a Number
console.log(parseInt('abc24'));     // Not a Number
console.log(parseInt('24abc'));     // 24 / En este caso lee primero el 24 y lo convierte a number. Ignora el resto
console.log(parseInt('24abc16'));   // 24 / En este caso lee primero el 24 y lo convierte a number. Ignora el resto

// Usos de parseInt()
var a = '5';
var b = '7';
console.log(a + b);     // 57 -> concatenación del string 5 y el string 7
console.log(parseInt(a) + parseInt(b));     // 12 -> con parseInt convertimos los valores a number y podemos sumarlos


// 2. Función parseInt (con una base)

// Binario:
console.log(parseInt('110111', 2));
console.log(parseInt('111001', 2));
console.log(parseInt('111', 2));   
console.log(parseInt(101, 2));     

// Hexadecimal
console.log(parseInt('1', 16));
console.log(parseInt('2', 16));
console.log(parseInt('3', 16));
console.log(parseInt('9', 16));
console.log(parseInt('A', 16));
console.log(parseInt('B', 16));
console.log(parseInt('C', 16));
console.log(parseInt('D', 16));
console.log(parseInt('E', 16));
console.log(parseInt('F', 16));
console.log(parseInt('G', 16)); //NaN
console.log(parseInt('FF', 16));
console.log(parseInt('22', 16));
console.log(parseInt('3E0A', 16));