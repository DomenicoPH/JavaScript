// Métodos - https://youtube.com/playlist?list=PLRBma32phT7gswvaDSe8Agpf14XL58OoD&si=xhZGWfzNzG41Cbmt

/* sort */

const frutas = ['Manzana', 'Banana', 'Uvas', 'Peras'];
const nums = [75, 19, 10, 90, 25, 110];

console.log(frutas)
frutas.sort()
console.log(frutas);

console.log(nums)
nums.sort()
console.log(nums);


//comparador
function ordenNumerico(a,b){
    // -1 -> 'a' se situa en un índice menor a 'b'
    //  0 -> no hay cambios
    //  1 -> 'b' se situa en un índice menor a 'a'
    return a - b
}

console.log(nums);
nums.sort(ordenNumerico)
console.log(nums)
