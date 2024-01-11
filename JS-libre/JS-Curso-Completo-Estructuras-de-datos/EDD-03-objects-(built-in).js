// https://youtube.com/playlist?list=PLC3y8-rFHvwg6nsAOfC5Is18KB2DrVOJy&si=fAjweYwtzSyKEReB

/* Objects */

const obj = {
    name: 'Bruce',
    age: 25,
    'key-three': true,
    sayMyName: function(){
        console.log(this.name)
    }
}

// Añadir claves : valor al objeto
obj.hobby = 'football'

// Eliminar claves : valor del objeto
delete obj['key-three']

// objeto.algo || objeto['algo']
console.log(obj)
console.log(obj.name)
console.log(obj.age)
console.log(obj['name'])
console.log(obj['age'])
console.log(obj['key-three'])
console.log(obj.hobby)
console.log(obj['hobby'])

// Método obj.sayMyName()
obj.sayMyName()
obj.name = 'Winston'
obj.sayMyName()

// Métodos de objetos: Object.keys(), Object.values(), Object.entries()
const testObj = {
    a: 'esto es A',
    b: 'B',
    c: 'This is C!',
    d: 'Banana Boat Song'
}

// Retorna las claves (key) -->
console.log(Object.keys(testObj))

// Retorna los valores (values) -->
console.log(Object.values(testObj))

// keys & values (claves y valores) ->
console.log(Object.keys(testObj)[0] + ': ' + Object.values(testObj)[0])
console.log(Object.keys(testObj)[1] + ': ' + Object.values(testObj)[1])
console.log(Object.keys(testObj)[2] + ': ' + Object.values(testObj)[2])
console.log(Object.keys(testObj)[3] + ': ' + Object.values(testObj)[3])

/* entries() retorna un arreglo de arreglos 
    en el que cada subarreglo contiene dos elementos 
    (strings): la clave (key) y el valor (value)
*/
console.log(Object.entries(testObj))

console.log(Object.entries(testObj)[0])
console.log(Object.entries(testObj)[0][0] + ': ' + Object.entries(testObj)[0][1])
let testObjPos1 = Object.entries(testObj)[0][0] + ': ' + Object.entries(testObj)[0][1]
console.log(testObjPos1)

console.log(Object.entries(testObj)[1])
console.log(Object.entries(testObj)[1][0] + ': ' + Object.entries(testObj)[1][1])
let testObjPos2 = Object.entries(testObj)[1][0] + ': ' + Object.entries(testObj)[1][1]
console.log(testObjPos2)

console.log(Object.entries(testObj)[2])
console.log(Object.entries(testObj)[2][0] + ': ' + Object.entries(testObj)[2][1])
let testObjPos3 = Object.entries(testObj)[2][0] + ': ' + Object.entries(testObj)[2][1]
console.log(testObjPos3)

console.log(Object.entries(testObj)[3])
console.log(Object.entries(testObj)[3][0] + ': ' + Object.entries(testObj)[3][1])
let testObjPos4 = Object.entries(testObj)[3][0] + ': ' + Object.entries(testObj)[3][1]
console.log(testObjPos4)



/*
        --------------------------------------------
        Tabla Referencial Big O
        --------------------------------------------
        insert - O(1)
        remove - O(1)
        Access - O(1)
        Search - O(n)
        Object.keys - O(n)
        Object.values - O(n)
        Object.entries - O(n)
        --------------------------------------------

*/