// Arrays [ https://youtu.be/LYF4FeJyccc?si=1lR-11k6TeeIMa1p ]

// numbers:
let numbers = [2, 5, 6, 3, 8, 1];

console.log(numbers)
console.log(numbers.length)

let number1 = numbers[0]
let number2 = numbers[1]
let number3 = numbers[2]
let number4 = numbers[3]
let number5 = numbers[4]
let number6 = numbers[5]
let number7 = numbers[6]

console.log(number1)
console.log(number2)
console.log(number3)
console.log(number4)
console.log(number5)
console.log(number6)
console.log(number7)

// ultimo índice del array:
console.log(numbers[numbers.length - 1])
// primer índice del array:
console.log(numbers[(numbers.length - 1) - numbers.length + 1])
// segundo...
console.log(numbers[(numbers.length - 1) - numbers.length + 2])
// tercero...
console.log(numbers[(numbers.length - 1) - numbers.length + 3])
// cuarto...
console.log(numbers[(numbers.length - 1) - numbers.length + 4])
// quinto...
console.log(numbers[(numbers.length - 1) - numbers.length + 5])
// sexto...
console.log(numbers[(numbers.length - 1) - numbers.length + 6])
// séptimo... [ no hay ]
console.log(numbers[(numbers.length - 1) - numbers.length + 7])

// Métodos:

// at()
console.log(numbers.at(0))
console.log(numbers.at(1))
console.log(numbers.at(2))
console.log(numbers.at(3))
console.log(numbers.at(4))
console.log(numbers.at(5))

// at() conteo desde atras
console.log(numbers.at(-6))
console.log(numbers.at(-5))
console.log(numbers.at(-4))
console.log(numbers.at(-3))
console.log(numbers.at(-2))
console.log(numbers.at(-1))

// for(){}

// Recorre array con bucle for (desde el primer índice)
let renumbers = [];
for(let i=0; i < numbers.length; i++){
    console.log(numbers[i])
    renumbers.push(numbers[i])
}
console.log(renumbers)

// Recorre array con bucle for (desde el último índice)
renumbers = []
for(let i = numbers.length-1; i >= 0; i--){
    console.log(numbers[i])
    renumbers.push(numbers[i])
}

console.log(renumbers)

// función SHOW (muestra) ...
function show(arr){
    let result = []
    for(let i = 0; i < arr.length; i++){
        result.push(arr[i])
    }
    return result
};

// función INVERT (invierte) ...
function invert(arr){
    let result = []
    for(let i = arr.length - 1; i >= 0; i--){
        result.push(arr[i])
    }
    return result
};

console.log(show(numbers))
console.log(invert(numbers))

let dumbArr1 = [1, 10, 100, 1000];
console.log(show(dumbArr1))
console.log(invert(dumbArr1))

let numerosOrdenados = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let numerosOrdenadosInvertidos = invert(numerosOrdenados);
console.log(numerosOrdenados);
console.log(numerosOrdenadosInvertidos)