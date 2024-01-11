// https://youtube.com/playlist?list=PLC3y8-rFHvwg6nsAOfC5Is18KB2DrVOJy&si=fAjweYwtzSyKEReB

/* Set */

/*
    Diferencias entre ♣'Array'♣ y ♠'Set'♠
    
    Duplicados:
    ♣ Array: Puede contener elementos duplicados. Un array puede tener múltiples elementos idénticos.
    ♠ Set: No puede contener elementos duplicados. Cada elemento en un Set debe ser único.
    
    Orden:
    ♣ Array: Mantiene el orden de inserción. Los elementos se almacenan y se recuperan en el orden en que se agregaron.
    ♠ Set: No garantiza ningún orden específico. Los elementos en un Set no se ordenan por posición de inserción. El orden de los elementos puede variar.
    
    Acceso a elementos:
    ♣ Array: Los elementos se acceden mediante índices. Se puede acceder a un elemento específico mediante su posición en el array.
    ♠ Set: No proporciona un acceso directo mediante índices. No hay una forma directa de acceder a un elemento en un Set por su posición.
    
    Estructura de datos:
    ♣ Array: Es una estructura de datos indexada y ordenada que puede contener cualquier tipo de valor, incluyendo objetos, números, strings, etc.
    ♠ Set: Es una estructura de datos no indexada que almacena valores únicos de cualquier tipo, eliminando automáticamente cualquier duplicado.
    
    Métodos y funcionalidad:
    ♣ Array: Tiene una amplia gama de métodos incorporados, como push, pop, slice, map, filter, etc., que se pueden utilizar para manipular y trabajar con los datos.
    ♠ Set: Tiene métodos específicos como add, delete, has, que permiten añadir, eliminar y verificar la presencia de elementos únicos.
*/

const set = new Set([1, 2, 3])
console.log(set)

// add()    --> añade al SET
set.add(4)
set.add(5)
set.add(5)
set.add(5)
console.log(set)

// delete() --> borra del SET
set.delete(5)
set.delete(3)
set.delete()
console.log(set)

// has()    --> Pregunta si un determinado elemento es parte del SET. Retorna 'true' o 'false'
console.log(set.has(1))
console.log(set.has(2))
console.log(set.has(5))
console.log(set.has(6))
console.log(set.has(10))

// Puede recorrerse con for... of..
for(const item of set){
    console.log(item)
}
