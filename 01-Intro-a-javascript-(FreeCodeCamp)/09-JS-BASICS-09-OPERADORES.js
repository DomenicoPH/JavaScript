// Operadores:

// 1. Operadores de comparación

// Operador de igualdad ( == )
console.log(5 == 5);
console.log(5 == '5');
console.log(5 == 'cinco');
console.log(5 == (3 + 2));
console.log(5 == 6);

console.log(([1,2,3] == [1,2,3]));
let arrTrio = [1,2,3];
console.log(arrTrio == arrTrio);

// Operador de igualdad estricta ( === )
console.log(9 == 9);
console.log(9 == '9');
console.log(9 === 9);
console.log(9 === '9');

// Práctica: Comparar valores (Operadores de igualdad y de igualdad estricta)
var a;
var b;
a = 5
b = 5
console.log(a == b);
console.log(a === b);
b = 8
console.log(a == b);
console.log(a === b);
b = '5'
console.log(a == b);
console.log(a === b);

// Operador de desigualdad
console.log(9 != 6);
console.log(9 != 9);
console.log(9 != '6');
console.log(9 != '9');
console.log('JavaScript' != 'JavaScript');  // false: son iguales
console.log('JavaScript' != 'Javascript');  // true: son distintos

console.log(arrTrio);
console.log(arrTrio != arrTrio);
console.log([1,2,3] != [1,2,3]);

// Operador de desigualdad estricta
console.log(1 != '1');
console.log(1 !== '1');

//-----------------------------------------------------------------------------------( > )

// Operador Mayor que... ( > )
console.log(6 > 5);
console.log(5 > 6);
console.log(5 > '5');
console.log(10 > '5');
console.log(10 > 5);

console.log('B' > 'A');
console.log('A' > 'B');
console.log('Z' > 'A');
console.log('B' > 'A' && 'C' > 'B');
console.log('ACB' > 'ABC');

console.log('AB' > 'A');
console.log('AB' > 'Z');
console.log('ABCDEFGHIJK' > 'Z');
console.log('Z' > 'ABCDEFGHIJK');
console.log('Barracuda' > 'Pajarito');
console.log('pea' > 'lettuce');
console.log('abanico' > 'abanica');

var compA = 15;
var compB = 7;
console.log(compA > compB);
compA = 100
compB = 299
console.log(compA > compB);

// Operador Mayor o igual que... ( >= )
console.log(5 > 5);
console.log(5 >= 5);
console.log('ZA' >= 'AZ' ); //Mayor -> true
console.log('AZ' >= 'AZ' ); //Igual -> true
console.log('AZ' >= 'ZA' ); //Menor -> false

//-----------------------------------------------------------------------------------( < )

// Operador Menor que... ( < )
console.log(5 < 6);
console.log(10 < 3);
console.log('Z' < 'A');
console.log('ABC' < 'BCD');
compA = 25;
compB = 50;
console.log(compA < compB);
console.log(compB < compA);

// Operador Menor o igual que... ( <= )
console.log(5 < 5);
console.log(5 <= 5);
console.log(5 <= '5');
console.log(2 <= 5);
console.log(10 <= 5);

// Probando operadores de comparación:
console.log('ABC' <= 'abc');
console.log('ABC' >= 'abc');
console.log('ABC' == 'abc');
console.log('ABC' === 'abc');

// 2. Operadores lógicos

// Operador AND (&&) ----------------------------------------------------------------------->

/*  Tabla de Verdad | Operador AND
    Para: X && Y
    ------------------------------
    |  X  |  Y  |  X && Y  |
    ------------------------
    |  T  |  T  |    T     |    ►   true & true = true
    |  T  |  F  |    F     |    ►   true & false = false
    |  F  |  T  |    F     |    ►   false & true = false
    |  F  |  F  |    F     |    ►   false & false = false

    * La expresión sólo es verdadera cuando ambos operandos son verdaderos.
*/

// console testing:
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

var a;
a = 8;
console.log((a > 5) && (a < 10));   // true && true
a = 3;
console.log((a > 5) && (a < 10));   // false && true
a = 15;
console.log((a > 5) && (a < 10));   // true && false
a = 1
console.log((a > 5) && (a == 3));   // false && false


// Operador OR (||) ----------------------------------------------------------------------->

/*  Tabla de Verdad | Operador OR
    Para: X || Y
    ------------------------------
    |  X  |  Y  |  X && Y  |
    ------------------------
    |  T  |  T  |    T     |    ►   true & true = true
    |  T  |  F  |    T     |    ►   true & false = true
    |  F  |  T  |    T     |    ►   false & true = true
    |  F  |  F  |    F     |    ►   false & false = false

    * La expresión es verdadera si al menos uno de los operandos es verdaderos.
*/

// console testing:
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

a = 5
console.log((a == 5) || (a < 15));  //  true || true
a = 2;
console.log((a < 5) || (a > 15));   //  true || false
a = 20
console.log((a < 5) || (a > 15));   //  false || true
a = 8;
console.log((a < 5) || (a > 15));   //  false || false


// Operador NOT (!) ----------------------------------------------------------------------->

/*  Tabla de verdad | Operador NOT
    Para: !X
    |   X   |   !X  |
    -----------------
    |   T   |   F   |
    |   F   |   T   |
*/

// console testing
console.log(true);
console.log(!true);
console.log(false);
console.log(!false);

b = 8
console.log(b > 5);
console.log(!(b > 5));
b = 3
console.log(b > 5);
console.log(!(b > 5));

let palabraUno = 'esternocleidomastoideo';
let palabraDos = 'califragilisticoespialidoso';
console.log(palabraUno > palabraDos); 
// true : 'palabraUno' es lexicográficamente mayor que 'palabraDos'
let palabraUnoValeMasQuePalabraDos = (palabraUno > palabraDos);
console.log('Esto es verdadero: ',(palabraUnoValeMasQuePalabraDos));
console.log('Esto es falso: ',!(palabraUnoValeMasQuePalabraDos));