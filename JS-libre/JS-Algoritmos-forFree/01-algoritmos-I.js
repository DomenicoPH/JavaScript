// Algoritmos I
// Visualizador de algoritmos: https://www.sortvisualizer.com/

/* Factorear */
function factorear(num){
    let factores = [1]
    let divisor = 2
    while(num > 1){
        while(num % divisor === 0){
            factores.push(divisor)
            num /= divisor
        }
        divisor++
    }
    return factores
};
// test --->
console.log(factorear(180))

function factorear2(n){
    let f = [1]
    let d = 2
    while(n > 1){
        while(n % d === 0){
            f.push(d)
            n /= d
        }
        d++
    }
    return f
}
console.log(factorear2(180))

//----------------------------------------------------------------------------------------------------------------------------->

/* Bubble Sort */
function bubbleSortA(arr){  // bubbleSort sin SWITCHER
    for(let i=0; i < arr.length-1; i++){
        for(let j=0; j < arr.length-1; j++){
            if(arr[j] > arr[j+1]){
                let aux = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = aux
            }
        }
    }
    return arr
};
let arr001 = [5, 4, 3, 2, 1]; console.log(bubbleSortA(arr001))

function bubbleSortB(arr){  // bubbleSort con SWITCHER
    let switcher = true
    while(switcher){
        switcher = false
        for(let i=0; i < arr.length-1; i++){
            if(arr[i] > arr[i+1]){
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
                switcher = true
            }
        }
    }
    return arr
};
let arr002 = [10, 8, 2, 6, 4]; console.log(bubbleSortB(arr002))

function bubbleSort2(arr){
    for(let i=0; i < arr.length - 1; i++){
        for(let j=0; j < arr.length - 1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    return arr
};
console.log(bubbleSort2([3,2,1]))

//----------------------------------------------------------------------------------------------------------------------------->

/* Insertion Sort */
function insertionSort(arr){ // con AUX
    for(let i=1; i < arr.length; i++){
        for(let j=i; j > 0; j--){
            if(arr[j] < arr[j-1]){
                let aux = arr[j]
                arr[j] = arr[j-1]
                arr[j-1] = aux
            }
        }
    }
    return arr
};
let arr003 = [5, 4, 3, 2, 1, 0]; console.log(insertionSort(arr003))

function insertionSort2(arr){ // sin AUX
    for(let i=1; i < arr.length; i++){
        for(let j=i; j > 0; j--){
            if(arr[j] < arr[j-1]){
                [arr[j],arr[j-1]] = [arr[j-1],arr[j]]
            }
        }
    }
    return arr
};
let arr004 = [10, 9, 8, 7, 6, 5]; console.log(insertionSort2(arr004))

function insertionSort3(arr){
    for(let i=1; i < arr.length; i++){
        for(let j=i; j > 0; j--){
            if(arr[j] < arr[j-1]){
                let aux = arr[j]
                arr[j] = arr[j-1]
                arr[j-1] = aux
            }
        }
    }
    return arr
};
console.log(insertionSort3([3,2,1]))

function insertionSort4(arr){
    for(let i=1; i < arr.length; i++){
        for(let j=i; j > 0; j--){
            if(arr[j] < arr[j-1]){
                [arr[j],arr[j-1]] = [arr[j-1],arr[j]]
            }
        }
    }
    return arr
};
console.log(insertionSort4([3,2,1]))

//----------------------------------------------------------------------------------------------------------------------------->

/* Selection Sort */
function selectionSort(arr){
    for(let i = 0; i < arr.length - 1; i++){
        let min = i
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[min]){
                min = j
            }
        }
        let aux = arr[i]
        arr[i] = arr[min]
        arr[min] = aux
    }
    return arr
};
console.log(selectionSort([3,2,1]))


//repetition is the key ----------- //repetition is the key ----------- //repetition is the key ----------- //repetition is the key -----------

//factorear ------------------------------------------------------------------*
function factorearRep(num){
    let factores = [1]
    let divisor = 2
    while(num > 1){
        while(num % divisor === 0){
            factores.push(divisor)
            num /= divisor
        }
        divisor++
    }
    return factores
};
console.log(factorearRep(180))

/*  Este algoritmo se llama "Factorización Prima". En la factorización prima, 
    descomponemos un número en el producto de sus factores primos. En este caso, 
    el algoritmo itera sobre los divisores y divide el número original por el 
    divisor tantas veces como sea posible, agregando cada divisor al conjunto 
    de factores primos. Este proceso continúa hasta que el número se reduce a 1.*/



//bubble sort ------------------------------------------------------------------*
function bubbleSortRep(arr){
    for(let i=0; i < arr.length - 1; i++){
        for(let j=0; j < arr.length - 1; j++){
            if(arr[j] > arr[j+1]){
                let aux = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = aux
            }
        }
    }
    return arr
};
console.log(bubbleSortRep([5, 4, 3, 2, 1]))

/*  Este algoritmo se llama "Bubble Sort" (Ordenamiento de Burbuja). 
    En el Bubble Sort, los elementos adyacentes se comparan y se intercambian 
    si están en el orden incorrecto. Este proceso continúa hasta que no hay 
    más intercambios que realizar, lo que indica que la lista está ordenada. 
    Cada pasada a través de la lista compara y, si es necesario, intercambia 
    los elementos adyacentes, llevando los elementos más grandes hacia el 
    final y los más pequeños hacia el principio.    */



//insertion sort ------------------------------------------------------------------*
function insertionSortRep(arr){
    for(let i=1; i < arr.length; i++){
        for(let j=i; j > 0; j--){
            if(arr[j] < arr[j-1]){
                let aux = arr[j]
                arr[j] = arr[j-1]
                arr[j-1] = aux
            }
        }
    }
    return arr;
};
console.log(insertionSortRep([5,4,3,2,1]))

/*  Este algoritmo se llama "Insertion Sort" (Ordenamiento por Inserción). 
    En este algoritmo, se va recorriendo la lista de elementos y, en cada 
    iteración, se "inserta" el elemento actual en su posición correcta en 
    la parte ya ordenada de la lista. La parte izquierda de la lista 
    siempre está ordenada, y en cada iteración se compara el elemento 
    actual con los elementos anteriores, intercambiándolos si es 
    necesario para lograr la ordenación. Este proceso continúa hasta que 
    todos los elementos estén en su posición correcta y la lista esté 
    ordenada.   */



//selection sort ------------------------------------------------------------------*
function selectionSortRep(arr){
    for(let i=0; i < arr.length-1; i++){
        let min = i
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[min]){
                min = j
            }
        }
        let aux = arr[i]
        arr[i] = arr[min]
        arr[min] = aux
    }
    return arr
}
console.log(selectionSortRep([5,4,3,2,1]))

/*  Este algoritmo se llama "Selection Sort". Es un algoritmo de ordenamiento 
    que trabaja dividiendo la lista original en dos partes: una parte ordenada 
    y otra desordenada. 
    En cada iteración, busca el elemento más pequeño en la parte desordenada 
    y lo intercambia con el primer elemento de la parte desordenada. 
    Este proceso continúa hasta que toda la lista está ordenada. La variable 
    min representa el índice del elemento mínimo en el subarray no ordenado, 
    y se utiliza para realizar los intercambios necesarios.     */

function ss(arr){
    for(let i=0; i < arr.length - 1; i++){
        let min = i
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[min]){
                min = j
            }
        }
        let aux = arr[i]
        arr[i] = arr[min]
        arr[min] = aux
    }
    return arr
}
console.log(ss([5, 4, 3, 2, 1]))

function sss(arr){
    for(let i=0; i < arr.length - 1; i++){
        let min = i
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[min]){
                min = j
            }
        }
        let aux = arr[i]
        arr[i] = arr[min]
        arr[min] = aux
    }
    return arr
}
console.log(sss([4,3,5,2,1]))