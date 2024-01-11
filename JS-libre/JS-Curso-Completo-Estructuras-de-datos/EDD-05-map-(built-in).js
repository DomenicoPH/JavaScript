// https://youtube.com/playlist?list=PLC3y8-rFHvwg6nsAOfC5Is18KB2DrVOJy&si=fAjweYwtzSyKEReB

/* Map */

/*
    Un Map en JavaScript es una estructura de datos que almacena pares clave-valor donde 
    las claves pueden ser de cualquier tipo, incluyendo objetos y valores primitivos. 
    Algunas características clave del Map son:
*/

/*
    1. Pares clave-valor: Cada elemento en un Map está compuesto por un par clave-valor, 
        donde la clave es única en el Map y se utiliza para acceder al valor correspondiente.

    2. Claves pueden ser de cualquier tipo: A diferencia de los objetos, donde las claves 
        solo pueden ser strings o símbolos, en un Map las claves pueden ser de cualquier 
        tipo de dato, incluyendo objetos, números, strings o incluso funciones.

    3. Iterable: Los Map tienen métodos que permiten iterar a través de ellos, como forEach, 
        keys, values y entries, lo que facilita recorrer y trabajar con sus elementos.

    4. Orden de inserción: Los Map recuerdan el orden de inserción de los elementos, lo que 
        significa que cuando iteras sobre un Map, obtienes los elementos en el orden en que 
        se insertaron.

    5. Flexibilidad en la comparación de claves: A diferencia de los objetos, en los que las 
        claves se comparan utilizando un algoritmo de comparación estricta (===), los Map 
        utilizan un algoritmo de comparación "SameValueZero", lo que les permite tratar a 
        NaN como una clave y considerar -0 y +0 como iguales.

    6. Métodos útiles: Además de los métodos de iteración, los Map también tienen métodos para 
        añadir (set), obtener (get), eliminar (delete) y verificar la existencia (has) de 
        elementos, lo que los hace útiles para gestionar datos asociativos.

    Los Map son especialmente útiles cuando se necesita almacenar asociaciones clave-valor 
    y se requiere la flexibilidad de las claves de diferentes tipos, así como la preservación 
    del orden de inserción. Esta estructura de datos es una alternativa sólida y versátil a los 
    objetos para ciertas situaciones.

    
    
    Diferencias entre ♥'Objects'♥ y ♦'Maps'♦

    Tipos de claves permitidas:
    ♥ Objetos: Las claves de los objetos están limitadas principalmente a strings y símbolos. 
        Aunque otros tipos de datos pueden usarse como claves, se convierten automáticamente 
        a strings.
    ♦ Mapas: Las claves en un Map pueden ser de cualquier tipo de dato, incluyendo objetos, 
        funciones, números, etc. Se preserva la integridad del tipo de dato utilizado como clave.
    
    Orden de inserción:
    ♥ Objetos: No garantizan un orden específico al recorrer sus propiedades. En algunos navegadores 
        modernos, se mantiene un orden basado en la secuencia de inserción, pero no es universal ni 
        está definido en las especificaciones.
    ♦ Mapas: Conservan el orden de inserción de sus elementos. Al iterar sobre un Map, se obtienen 
        los elementos en el mismo orden en que se insertaron.
    
    Comparación de claves:
    ♥ Objetos: Las claves se comparan utilizando un algoritmo de comparación estricta (===). 
        Esto puede llevar a situaciones en las que, por ejemplo, 1 y "1" son tratados como 
        claves diferentes.
    ♦ Mapas: Utilizan un algoritmo de comparación "SameValueZero", que considera a NaN como 
        una clave válida y considera -0 y +0 como iguales.
    
    Tamaño y rendimiento:
    ♥ Objetos: Son más livianos y están optimizados para un rendimiento general en escenarios 
        de uso común.
    ♦ Mapas: Pueden ser más lentos en algunas operaciones comparadas con objetos para conjuntos 
        de datos pequeños debido a la estructura de datos más compleja.
    
    Iterabilidad y métodos asociados:
    ♥ Objetos: Para iterar sobre un objeto, hay que emplear métodos como Object.keys, 
        Object.values o Object.entries.
    ♦ Mapas: Proporcionan métodos específicos para iterar, como forEach, keys, values, 
        entries, lo que los hace más convenientes para trabajar con sus elementos.
*/

const map = new Map([['a', 1],['b', 2]])
console.log(map)

//set() --> Inserta un nuevo par clave: valor en el mapa.
map.set('c', 3)
map.set('d', 4)
map.set('e', 5)
map.set('f', 6)

//has() --> Nos dice si el mapa (map) contiene la propiedad pasada por parámetro. Retorna 'true' o 'false'.
console.log(map.has('a'))
console.log(map.has('b'))
console.log(map.has('x'))
console.log(map.has('y'))

//size --> Nos da el número de pares 'clave: valor' contenidos en el mapa.
console.log(map)
const mapSize = map.size
console.log(mapSize)
console.log(map.size)

//clear() --> Limpia la estructura y la deja vacia
console.log(map)
console.log(map.size)
map.clear() //BORRA TODO
console.log(map)
console.log(map.size)


// Recorrido con for... of..
for(const [key,value] of map){
    console.log(`${key}: ${value}`)
}