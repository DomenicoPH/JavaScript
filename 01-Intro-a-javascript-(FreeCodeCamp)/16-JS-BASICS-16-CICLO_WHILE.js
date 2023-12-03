// Ciclo while

var i = 0;
while (i <= 5){
    console.log('Hola mundo!');
    i++
};
//:mientras i sea menor o igual que 5 muestra 'Hola mundo!' en la consola.

    /*  it-01 -> i=0 -> consola: Hola mundo!
        it-02 -> i=1 -> consola: Hola mundo!
        it-03 -> i=2 -> consola: Hola mundo!
        it-04 -> i=3 -> consola: Hola mundo!
        it-05 -> i=4 -> consola: Hola mundo!
        it-06 -> i=5 -> consola: Hola mundo!
        it-07 -> i=6 -< END OF CICLE
    */

var miArreglo = [];
var i = 0;

console.log(miArreglo);
while (i < 10){
    miArreglo.push(i);
    i++;
}
console.log(miArreglo);

//

var miArregloDeImpares = []
var j = 0;
while (j < 10){
    if(j % 2 !== 0){miArregloDeImpares.push(j)}
    j++
    continue;
}
console.log('Impares entre 0 y 10:',miArregloDeImpares)

//

var numeros = [2, 3, 4, 5, 6, 8, 9, 34];

console.log(numeros);
while (numeros.length > 4){
    numeros.pop()
};
console.log(numeros);

//función FF (first-four)
function ff (arr){
    while(arr.length > 4){arr.pop()}
    return arr
}

let arr1 = [1,2,3,4,5,6,7,8,9,0,7]
let arr2 = [34,12,654,234,876,213,987]
let arr3 = [1492,1997,2001,1220,1994,2050,2023]
let arr4 = [23,1,45,8,234,8,0,3,11]
let arr5 = ['hola','mañana','luna','perro','sandía','mono','chino']

console.log('ff from arr1',ff(arr1));