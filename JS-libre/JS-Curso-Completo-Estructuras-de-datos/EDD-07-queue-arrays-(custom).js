// https://youtube.com/playlist?list=PLC3y8-rFHvwg6nsAOfC5Is18KB2DrVOJy&si=fAjweYwtzSyKEReB

/* Queue (con un array) */

/*
    Las colas o 'queues' funcionan bajo el principio FIFO: First IN | First OUT
    Esto significa que el primer elemento en entrar en la cola es el primero
    en salir de ella y el último en entrar, el último en salir.

    Una forma de visualizarlo es con una cola de personas que quiere entrar a un lugar: 
    Las personas van llegando y van formando la cola hasta que abren el lugar y la gente
    empieza a pasar: el primero que llegó a la cola será el primero en abandonarla y
    entrar al lugar. Luego pasará el segundo, el tercero y así hasta que finalmente
    pase el último de la cola.

    Los métodos utilizados para las pilas son: Enqueue() para añadir al final y
    dequeue() para sustraer del comienzo.
*/

class Queue{
    constructor(){
        this.items = []
    }
    //---------------Enqueue
    enqueue(item){
        this.items.push(item)
    }
    //---------------Dequeue
    dequeue(){
        return this.items.shift()
    }
    //---------------IsEmpty
    isEmpty(){
        return this.items.length === 0
    }
    //---------------Peek
    peek(){
        if(!this.isEmpty()){
            return this.items[0]
        }
        return null
    }
    //---------------Size
    size(){
        return this.items.length
    }
    //---------------Print
    print(){
        console.log(this.items.toString())
    }
};

// Queue Testing

const queue = new Queue()
console.log(queue.isEmpty())
console.log(queue.size())

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)

queue.print()   // print 1

console.log(queue.size())
console.log(queue.isEmpty())

queue.dequeue()
console.log(queue.size())
queue.enqueue(60)

queue.dequeue()
console.log(queue.size())
queue.enqueue(70)

queue.dequeue()
console.log(queue.size())
queue.enqueue(80)

queue.print()   // print 2