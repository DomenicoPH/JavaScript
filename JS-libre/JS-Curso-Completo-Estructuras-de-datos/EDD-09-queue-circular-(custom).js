// https://youtube.com/playlist?list=PLC3y8-rFHvwg6nsAOfC5Is18KB2DrVOJy&si=fAjweYwtzSyKEReB

/* Circular Queue (con un object) */

/*
    Una cola circular (circular queue) es una estructura de datos que sigue el principio 
    de una cola tradicional, pero con la diferencia de que cuando alcanza el final de la 
    cola, el siguiente elemento se inserta en la posición inicial. Esto crea un ciclo o 
    bucle, de ahí el término "circular".
*/

class CircularQueue{
    constructor(capacity){
        this.items = new Array(capacity)
        this.capacity = capacity
        this.currentLength = 0
        this.rear = -1
        this.front = -1
    }

    isFull(){
        return this.currentLength === this.capacity
    }

    isEmpty(){
        return this.currentLength === 0
    }

    enqueue(item){
        if(!this.isFull()){
            this.rear = (this.rear + 1) % this.capacity
            this.items[this.rear] = item
            this.currentLength += 1
            if(this.front === -1){
                this.front = this.rear
            }
        }
    }

    dequeue(){
        if(this.isEmpty()){
            return null
        }
        const item = this.items[this.front]
        this.items[this.front] = null
        this.front = (this.front + 1) % this.capacity
        this.currentLength -= 1
        if(this.isEmpty()){
            this.front = -1
            this.rear = -1
        }
        return item
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[this.front]
        }
        return null
    }

    print(){
        if(this.isEmpty()){
            console.log('Cola vacía')
        } else {
            let i
            let str = ''
            for(i = this.front; i !== this.rear; i = (i + 1) % this.capacity){
                str += this.items[i] + ' '
            }
            str += this.items[i]
            console.log(str)
        }
    }
};

const circularQueue = new CircularQueue(5)
console.log(circularQueue.isEmpty())
circularQueue.print()

circularQueue.enqueue(10)
circularQueue.enqueue(20)
circularQueue.enqueue(30)
    console.log(circularQueue.isFull())
circularQueue.enqueue(40)
circularQueue.enqueue(50)

console.log(circularQueue.isEmpty())
console.log(circularQueue.isFull())
circularQueue.print()

// --> flujo -->
console.log(circularQueue.peek())

circularQueue.dequeue()
circularQueue.enqueue(60)
circularQueue.print()
console.log(circularQueue.peek())

circularQueue.dequeue()
circularQueue.enqueue(70)
circularQueue.print()
console.log(circularQueue.peek())

circularQueue.dequeue()
circularQueue.enqueue(80)
circularQueue.print()
console.log(circularQueue.peek())

circularQueue.dequeue()
circularQueue.enqueue(90)
circularQueue.print()
console.log(circularQueue.peek())

circularQueue.dequeue()
circularQueue.enqueue(100)
circularQueue.print()
console.log(circularQueue.peek())