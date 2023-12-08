//  Queue - cola

/*  Una cola (o queue) es una estructura de datos en la que 
    los elementos se añaden al final y se eliminan del principio, 
    siguiendo el principio FIFO (First In, First Out). 
    Es similar a esperar en una fila: el primer elemento que 
    entra es el primero en ser atendido.
    En JavaScript, una cola se puede implementar utilizando un array. 
    Los elementos nuevos se agregan al final del array usando el método push(), 
    y se eliminan del principio usando el método shift(). 
    Esto asegura que el primer elemento agregado es el primero en ser 
    eliminado, manteniendo el orden de llegada.
*/

// Modelo de cola:

class Queue {
    constructor() {
        this.items = [];
    }
    // Ingresar en la cola (al final)
    enqueue(item) {
        this.items.push(item);
    }
    // salir de la cola (desde el comienzo)
    dequeue() {
        return this.items.shift();
    }
    // Ver el elemento en la punta de la cola
    peek() {
        return this.items[0];
    }
    queueLength() {
        (myQueue.items.length === 0) ? console.log('Cola vacía') : console.log(myQueue.items.length);
    }
};

// Instancia de la cola

const myQueue = new Queue();
myQueue.queueLength()

myQueue.enqueue({1: 'primero en llegar'})
myQueue.enqueue({2: 'segundo en llegar'})
myQueue.enqueue({3: 'tecero en llegar'})
myQueue.enqueue({4: 'último en llegar'})

console.log(myQueue.items)
myQueue.queueLength()
console.log('Próximo en pasar:', myQueue.peek())

let primeroEnPasar = myQueue.dequeue()
    console.log(primeroEnPasar);
let segundoEnPasar = myQueue.dequeue()
    console.log(segundoEnPasar);

myQueue.queueLength()
console.log('Próximo en pasar:', myQueue.peek())

let terceroEnPasar = myQueue.dequeue()
    console.log(terceroEnPasar)
let ultimoEnPasar = myQueue.dequeue()
    console.log(ultimoEnPasar)

myQueue.queueLength()