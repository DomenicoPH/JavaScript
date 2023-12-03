// Ciclo for

var miArreglo = [];
console.log(miArreglo);

for(let i = 0; i < 10; i++){
    miArreglo.push(i);
    //miArreglo.push(`A-${i}`);
}

console.log(miArreglo);


// Ciclo for (números impares)
var miArregloImpar = [];
console.log(miArregloImpar);
for(let i=1; i<=50; i+=2){
    miArregloImpar.push(i);
};
console.log('Impares',miArregloImpar);


// Ciclo for (números pares)
var miArregloPar = [];
console.log(miArregloPar);
for(let i=0; i<=50; i+=2){
    miArregloPar.push(i)
};
console.log('Pares:',miArregloPar);


// cuantos numeros impares hay antes del número ingresado?
function imparesHasta(num){
    let impares = []
    for(let i=1; i<num; i+=2){
        impares.push(i)
    }
    return [`impares antes de ${num}: ${impares.length}`, impares]
}

console.log(imparesHasta(7));
console.log(imparesHasta(17));
console.log(imparesHasta(5));
console.log(imparesHasta(100));

// Contar hacia atrás
for(let i=15; i >= 10; i--){
    console.log(i);
}

let tenToHundred = []
for(let i=100; i >= 10; i--){
    tenToHundred.push(i)
}
console.log('Hundred to Ten ->',tenToHundred);
console.log('This is Ten to Hundred ->',tenToHundred.reverse());

// Pares de 80 a 23 (contando hacia atrás)
let paresBack = []
for(let i=80; i >= 23; i -= 2){
    paresBack.push(i)
}
console.log(paresBack)
console.log(paresBack.length)

// Impares de 230 a 199 (contando hacia atrás)
let imparesBack = []
for(let i=229; i >= 199; i -= 2){
    imparesBack.push(i)
}
console.log(imparesBack);
console.log(imparesBack.length);

// con Arrays
var miArr = [];
for (var i = 10; i > 0; i -= 2){
    miArr.push(i);
}
console.log(miArr);

// Iterar sobre un Array con un ciclo for
var miSuma1 = [4,6,8,2];
var total = 0;
for(let i = 0; i < miSuma1.length; i++){
    total += miSuma1[i]
}
console.log(total)

var miSuma2 = [1,5,87,34,567,98,1231,435,31,654];
var total2 = 0;
for(let i = 0; i < miSuma2.length; i++){
    total2 += miSuma2[i];
}
console.log(total2);

// Lenguajes de programación
var lenguajes = ['JavaScript', 'Python', 'Java', 'C++'];
var lenguajesMayus = []
for (let i=0; i < lenguajes.length; i++){
    lenguajesMayus.push(lenguajes[i].toUpperCase())
    //console.log(lenguajes[i].toUpperCase())
}
console.log(lenguajesMayus)

// ciclo for dentro de una función (contar números pares)
function contarNumerosPares(arr){
    var total = 0
    for (let i=0; i < arr.length; i++){
        if (arr[i] % 2  === 0)
        total++
    }
    return total
}
let dosPares = [1,2,3,4];
let tresPares = [6,12,7,3,20];
let cuatroPares = [5,6,8,10,4,1];
console.log('Numeros pares:',contarNumerosPares(dosPares));
console.log('Numeros pares:',contarNumerosPares(tresPares));
console.log('Numeros pares:',contarNumerosPares(cuatroPares));