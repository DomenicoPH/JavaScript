//  Diferencia entre dos arreglos

/*
    Compara dos arreglos y devuelve un nuevo arreglo con los elementos 
    que sólo se encuentran en uno de los dos arreglos dados, pero no 
    en ambos. En otras palabras, devuelve la diferencia simétrica de 
    los dos arreglos.

    **Nota:** Puedes devolver el arreglo con sus elementos en cualquier orden.
*/

// Solución Imperativa:

function diffArrayIMP(arr1,arr2){                           // Función diffArray recibe 2 parámetros (arr1 y arr2)
    const newArr = []                                       // Creamos newArr como un array vacío
    function onlyInFirst(first, second){                    // Función onlyInFirst que también recibe 2 parámetros (fist y second)
        for(let i=0; i < first.length; i++){                // Recorremos el primer parámetro (first) en toda su longitud
            if(second.indexOf(first[i]) === -1){            // Preguntamos SI el elemento actual del primer array no está presente en el segundo array
                newArr.push(first[i])                       // Si no está presente, agregarlo al nuevo array (newArr)
            }
        }
    }
    onlyInFirst(arr1, arr2);                                // Ejecutamos 'onlyInFirst' con arr1 como primer parámetro (first)
    onlyInFirst(arr2, arr1);                                // Ejecutamos 'onlyInFirst' con arr2 como primer parámetro (first)
    return newArr                                           // Retornamos el nuevo array (newArr) que contiene los valores no repetidos
};

console.log(diffArrayIMP([13, 23, 31, 50], [11, 23, 31, 47, 50]))
console.log(diffArrayIMP([1, 2, 3, 5], [1, 2, 3, 4, 5]))
console.log(diffArrayIMP(['hola', 'cara', 'sandía', 'corazón'], ['ola', 'cara', 'sangría', 'corazón']))


// Solución Declarativa:

function diffArrayDEC(arr1, arr2){
    return arr1                                                             // Retorna el arr1 (primer parámetro)
    .concat(arr2)                                                           // Concatena arr1 con arr2
    .filter((item) => !arr1.includes(item) || !arr2.includes(item))         // Filtra los elementos que no están presentes en ambos arrays
};

/*  .filter((item) => !arr1.includes(item) || !arr2.includes(item)) 

    1.  !arr1.includes(item): Verifica si el elemento item no está presente en arr1. 
        El método includes devuelve true si el elemento está presente y false si no 
        lo está. 
        El ! antes de arr1.includes(item) invierte ese resultado, de modo que 
        devuelve true si el elemento NO está en arr1.
    
        2.  ||: Es un operador lógico "o" que devuelve true si al menos una de las 
        condiciones es verdadera. En este caso, la condición anterior 
        (!arr1.includes(item)) se combina con la siguiente condición.

    3.  !arr2.includes(item): Verifica si el elemento item no está presente en arr2, 
        de manera similar a la primera condición.

    *   Esta línea filtra los elementos que no están presentes en ambos arr1 y arr2. 
        Devolverá true para los elementos que no están en arr1 o no están en arr2, 
        es decir, los elementos que son únicos en al menos uno de los dos arrays.
*/

console.log(diffArrayDEC([13, 23, 31, 50], [11, 23, 31, 47, 50]))
console.log(diffArrayDEC([1, 2, 3, 5], [1, 2, 3, 4, 5]))
console.log(diffArrayDEC(['hola', 'cara', 'sandía', 'corazón'], ['ola', 'cara', 'sangría', 'corazón']))


// Solución Declarativa Alternativa:

function diffArrayDEC2(arr1, arr2){
    return [...diff(arr1,arr2), ...diff(arr2,arr1)]             // Combina los elementos únicos de ambas operaciones en un nuevo array y devuelve el resultado
    function diff(a,b){                                         // Función diff: Devuelve los elementos de a que no están en b
        return a.filter(item => b.indexOf(item) === -1)         // Utiliza filter para obtener solo los elementos de a que no están en b
    }
};

console.log(diffArrayDEC2([13, 23, 31, 50], [11, 23, 31, 47, 50]))
console.log(diffArrayDEC2([1, 2, 3, 5], [1, 2, 3, 4, 5]))
console.log(diffArrayDEC2(['hola', 'cara', 'sandía', 'corazón'], ['ola', 'cara', 'sangría', 'corazón']))