//  Hash Table

/*  Las tablas hash son estructuras de datos que almacenan datos en una forma de clave-valor. 
    Funcionan a través de una función hash, que convierte la clave (o llave) en un índice 
    dentro de una tabla, donde se almacena el valor asociado a esa clave. 
    La función hash asigna cada clave a un índice único en la tabla, permitiendo un acceso 
    rápido a los valores.

    Cuando se quiere almacenar un valor, se aplica la función hash a la clave para determinar 
    la ubicación en la tabla donde se almacenará el valor. Si dos claves resultan en el mismo 
    índice (lo que se conoce como colisión), existen diferentes técnicas para manejar esto, 
    como el uso de listas enlazadas en ese índice para almacenar múltiples valores asociados 
    a claves diferentes.

    Las tablas hash son eficientes para buscar y recuperar datos, ya que el acceso a un 
    elemento es rápido en promedio, independientemente del tamaño de la tabla, siempre 
    que la función hash sea eficaz y las colisiones se manejen adecuadamente.
*/

// Modelo de Tabla Hash:

class HashTable {
    constructor(size) {
        this.buckets = new Array(size);
        this.numBuckets =  this.buckets.length
    }

    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.numBuckets;
    }

    insert(key, value) {
        const index = this.hash(key);
        if(!this.buckets[index]) this.buckets[index] = []
        this.buckets[index].push([key, value]);
    }

    get(key) {
        const index = this.hash(key);
        if (!this.buckets[index]) return null;
        for (let i=0; i < this.buckets[index].length; i++) {
            if(this.buckets[index][i][0] === key) {
                return this.buckets[index][i][1]
            }
        }
    }
}

// I Instancia de Tabla Hash:
const hashTable = new HashTable();

// insert de usuarios
hashTable.insert('01', {name: 'Arkticus Mandalas', age: 45, role: 'wise warrior'});
hashTable.insert('02', {name: 'Efrentos Gorr', age: 35, role: 'crazy warrior'});
hashTable.insert('03', {name: 'Gardula Fantoz', age: 30, role: 'team leader'});

console.log(hashTable.get('01'))
console.log(hashTable.get('02'))
console.log(hashTable.get('03'))


// II Jugando con la tabla hash (hasta romperla)
const library = new HashTable()
//insert
library.insert('001', {titulo: 'Jurassic Park', autor: 'Michael Crichton'})
library.insert('002', {titulo: '1984', autor: 'George Orwell'})
library.insert('003', {titulo: 'Una odisea espacial', autor: 'Arthur C. Clarke'})
library.insert('004', {titulo: 'Moby Dick', autor: 'Herman Melville'})
library.insert('005', {titulo: 'La naranja mecánica', autor: 'Anthony Burgess'})
library.insert('006', {titulo: 'Trainspotting', autor: 'Irvin Welsh'})
library.insert('007', {titulo: 'Guerra y paz', autor: 'Leon Tolstoi'})
//get
let libro1 = library.get('001')
let libro4 = library.get('004')
let libro7 = library.get('007')
let libro9 = library.get('009')
//console.log
console.log('Libros:')
console.log(libro1);
console.log(libro4);
console.log(libro7);
console.log(libro9);