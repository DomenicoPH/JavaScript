// https://youtube.com/playlist?list=PLC3y8-rFHvwg6nsAOfC5Is18KB2DrVOJy&si=fAjweYwtzSyKEReB

/* Arrays */

const arr = [1, 2, 3, 'hola']
console.log(arr[0])
console.log(arr[arr.length - 1])

/* Métodos Array */

//push(value)
arr.push(4)
console.log(arr)

//unshift(value)
arr.unshift(0)
console.log(arr)

//pop()
arr.pop()
arr.pop()
console.log(arr)

//shift()
arr.shift()
console.log(arr)

//iterar array con 'for - of'
for(const item of arr){
    console.log(item)
}

// --- Otros métodos de arrays: map, filter, reduce, concat, slice, splice, sort --- 

// -----> map()
const arrX10 = arr.map((item) => item * 10)
const arrX25 = arr.map((item) => item * 25)
const arrX365 = arr.map((n) => n * 365)
console.log(arrX10)
console.log(arrX25)
console.log(arrX365)


// -----> filter()
const filteredArr1 = arrX10.filter((number) => number > 12)
console.log(filteredArr1)
const filteredArr2 = arrX25.filter((number) => number < 65)
console.log(filteredArr2)

// -----> concat()
const arrConcatArr = filteredArr1.concat(filteredArr2)
console.log(arrConcatArr)
const arrNums = arrConcatArr.concat()
console.log(arrConcatArr)
console.log(arrNums)

// -----> sort()
arrNums.push(10)
arrNums.unshift(75)
console.log(arrNums)
console.log(arrNums.sort((a,b) => a - b))

const arrPalabras = ['promesas', 'agua', 'si', 'desvergonzados', 'La mosca le dijo a la araña']
arrPalabras.push('a')
arrPalabras.push('horizontes')
console.log(arrPalabras)
console.log(arrPalabras.sort((a,b) => a.length - b.length))

// -----> reduce()
const nums = [1, 2, 3, 4, 5]
console.log(nums.reduce((acc,n) => acc + n, 0))
console.log(nums.reduce((acc,n) => acc - n, 0))
// Para sumar todos los elementos del array

console.log(nums)
const product = nums.reduce((acc, n) => acc * n, 1);
console.log(product)
// Para multiplicar todos los elementos del array

const palabras = ['Hola', ' ', 'mundo', '!'];
const frase = palabras.reduce((acc, word) => acc + word, '');
console.log(frase)
// Para concatenar

const arrayOFnumbers = [10, 2, 5, 8];
const max = arrayOFnumbers.reduce((acc, n) => (acc > n ? acc : n), Number.MIN_SAFE_INTEGER);
console.log(max);
const arrayOFnumbers2 = [300, 678, 987, 244, 108, 302]
const max2 = arrayOFnumbers2.reduce((acc, n) => (acc > n ? acc : n), Number.MIN_SAFE_INTEGER);
console.log(max2)
// Para encontrar el valor más alto

const data = ['a', 'b', 'a', 'c', 'b', 'a'];
const count = data.reduce((acc, value) => {
  acc[value] = (acc[value] || 0) + 1;
  return acc;
}, {});
console.log(count)
// Para hacer un conteo de los elementos del array

// -----> slice()
const colorRoad = ['yellow', 'orange', 'red', 'purple', 'blue', 'green']
const hot = colorRoad.slice(0,3)
const cold = colorRoad.slice(3,colorRoad.length)
console.log(colorRoad)
console.log(hot)
console.log(cold)
// Para extaer una 'tajada' de un array

// -----> splice()
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
const nom = 'Domenico'
const ap1 = 'Pagano'
const ap2 = 'Hildebrandt'
const fullNom = [nom, ap2]
console.log(fullNom.join(' '))
fullNom.splice(1,0,ap1) // Parámetros SPLICE: 1 -> (índice de inserción) | 0 -> (elementos a borrar) | ap1 -> (elemento a ingresar en el índice de inserción)
console.log(fullNom.join(' '))
// Para insertar un elemento en un índice determinado

const numeroIntruso = [1, 2, 33, 4, 5]
console.log(numeroIntruso.splice(2,1,3)) // Parámetros SPLICE: 2 -> (índice de inserción) | 1 -> (elementos a borrar) | 3 -> (elemento a ingresar en el índice de inserción)
console.log(numeroIntruso)
// Para quitar un elemento y reemplazarlo por otro

console.log(numeroIntruso)
console.log(numeroIntruso.splice(numeroIntruso.length-1,1))
console.log(numeroIntruso)
// Para quitar un elemento

/*  -------------------- Arrays Big-O time complexity --------------------

    La notación de complejidad temporal Big O se utiliza para describir el 
    tiempo de ejecución de un algoritmo en función del tamaño de la entrada. 
    Aquí están algunas complejidades temporales comunes para operaciones 
    en arrays:

    ► Acceso (Access): O(1)
        Acceder a un elemento por su índice en un array es una operación de 
        tiempo constante, ya que el array proporciona acceso directo a través 
        del índice.

    ► Búsqueda lineal (Linear Search): O(n)
        En una búsqueda lineal, se recorre el array uno por uno para encontrar 
        un elemento específico. A medida que el tamaño del array aumenta, el 
        tiempo de búsqueda aumenta de manera proporcional.

    ► Inserción/eliminación al final (Push/Pop): O(1)
        Agregar o eliminar elementos al final de un array (usando push o pop) 
        es una operación de tiempo constante, ya que no requiere recorrer 
        el array.

    ► Inserción/eliminación al principio (Shift/Unshift): O(n)
        Agregar o eliminar elementos al principio del array (usando unshift o shift) 
        implica mover todos los elementos hacia adelante o hacia atrás, lo que lleva 
        tiempo lineal proporcional al tamaño del array.

    ► Acceso a través de índices no constantes (Acceso a índices no constantes): O(1)
        Si bien el acceso a través de un índice constante es O(1), acceder a un índice 
        que no es constante (como el resultado de una variable o cálculo) a menudo es 
        O(1), pero puede variar dependiendo del tipo de acceso.

    ► Ordenación (Sorting): O(n log n)
        La mayoría de los algoritmos de ordenación eficientes, como Quick Sort o Merge 
        Sort, tienen una complejidad promedio de O(n log n) para ordenar un array de 
        tamaño n.

    ► Filtrado/mapeo/reducción (Filtering/Mapping/Reduction): O(n)
        Operaciones que implican recorrer todos los elementos del array, como map, 
        filter, y reduce, tienen una complejidad lineal, ya que necesitan procesar cada 
        elemento al menos una vez.

        --------------------------------------------
        Tabla Referencial Big O
        --------------------------------------------
        insert / remove from end - O(1)
        insert / remove from beginning - O(n)
        Access - O(1)
        Search - O(n)
        Push/ Pop - O(1)
        Shift/ Unshift/ Concat/ Slice/ Splice - O(n)
        forEach/ Map/ Filter/ Reduce - O(n)
        --------------------------------------------

*/