// Métodos - https://youtube.com/playlist?list=PLRBma32phT7gswvaDSe8Agpf14XL58OoD&si=xhZGWfzNzG41Cbmt

/* slice */

// numeros
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// -index---> 0  1  2  3  4  5  6  7  8  9 <---index- //

const tajada1 = nums.slice(4, 6);   // Desde el índice 4 hasta el índice 6
const tajada2 = nums.slice(0, 6);   // Desde el índice 0 hasta el índice 6
const tajada3 = nums.slice(5, nums.length);     // Desde el índice 5 hasta el final del array

const tajada4 = nums.slice(4);  // Desde el índice 4 hasta el final del array
const tajada5 = nums.slice(5);  // Desde el índice 5 hasta el final del array

const tajada6 = nums.slice(-4)  // 4 índices desde el final del array
const tajada7 = nums.slice(-2)  // 2 índices desde el final del array

const primeraMitad = nums.slice(0, nums.length - Math.round(nums.length / 2))
const segundaMitad = nums.slice(nums.length - Math.round(nums.length / 2))

const tajadaEspecial = nums.slice((nums.length - 8), (nums.length - 2))
    //nums.length = 10 -> (10 - 8 = 2) -> index 2 = 3 -> start
    //nums.length = 10 -> (10 - 2 = 8) -> index 8 = 9 -> limit (no incluido)

console.log(tajada1);
console.log(tajada2);
console.log(tajada3);

console.log(tajada4)
console.log(tajada5)

console.log(tajada6)
console.log(tajada7)

console.log(tajadaEspecial);

console.log(primeraMitad);
console.log(segundaMitad);
console.log(primeraMitad.concat(segundaMitad))

const renums = primeraMitad.concat(segundaMitad)
console.log(nums);
console.log(renums);