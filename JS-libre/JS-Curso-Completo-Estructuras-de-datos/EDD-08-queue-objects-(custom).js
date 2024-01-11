// https://youtube.com/playlist?list=PLC3y8-rFHvwg6nsAOfC5Is18KB2DrVOJy&si=fAjweYwtzSyKEReB

/* Queue (con un object) */

class Queue {
    constructor(){
        this.items = {}
        this.rear = 0
        this.front = 0
    }

    enqueue(item){
        this.items[this.rear] = item
        this.rear++
    }

    dequeue(){
        const item = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return item
    }

    isEmpty(){
        return this.rear - this.front === 0
    }

    peek(){
        return this.items[this.front]
    }

    size(){
        return this.rear - this.front
    }

    print(){
        //console.log(this.items)
        return this.items
    }
};

const queue = new Queue()
console.log(queue.isEmpty())

queue.enqueue(10)
console.log(queue.print())
queue.enqueue(20)
console.log(queue.print())
queue.enqueue(30)
console.log(queue.print())
queue.enqueue(40)
console.log(queue.print())
queue.enqueue(50)
console.log(queue.print())

console.log(queue.size())
console.log(queue.isEmpty())

console.log(queue.peek())
console.log(queue.print())
queue.dequeue()
console.log(queue.peek())
console.log(queue.print())
queue.dequeue()
console.log(queue.peek())
console.log(queue.print())

console.log(queue.size())
console.log(queue.print())