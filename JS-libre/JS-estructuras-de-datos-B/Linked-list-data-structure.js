/*  Linked List |   
    ref: https://youtu.be/ZBdE8DElQQU?si=DTiHa9pDY4RpWpSE
    structure: https://i.ytimg.com/vi/ZBdE8DElQQU/maxresdefault.jpg
*/

// Lógica de una Linked List
// Nodo 1
const n1 = {
    data: 100
}
// Nodo 2
const n2 = {
    data: 200
}
n1.next = n2

console.log(n1)

//--- Modelo de lista enlazada + nodo ---//

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert first node ------------------------------->
    insertFirst(data){
        this.head = new Node(data, this.head)
        this.size++
    }

    // Insert last node ------------------------------->
    insertLast(data){
        let node = new Node(data);
        let current;
        if(!this.head){
            this.head = node
        } else {
            current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node
        }
        this.size++;
    }

    // Insert at index ------------------------------->
    insertAt(data,index){
        if(index > 0 && index > this.size){
            return;
        }
        if(index === 0){
            this.head = new Node(data, this.head);
            return;
        }
        const node = new Node(data);
        let current, previous;
        current = this.head;
        let count = 0;
        while(count < index){
            previous = current;
            count++
            current = current.next
        }
        node.next = current;
        previous.next = node;
        this.size++
    }

    // Get at index ------------------------------->
    getAt(index){
        let current = this.head;
        let count = 0;
        while(current){
            if(count === index){
                console.log(current.data)
            }
            count++;
            current = current.next;
        }
        return null;
    }

    // Remove at Index ------------------------------->
    removeAt(index){
        if(index > 0 && index > this.size){
            return;
        }
        let current = this.head;
        let previous;
        let count = 0;
        if(index === 0){
            this.head = current.next;
        } else {
            while(count < index){
                count++;
                previous = current;
                current = current.next
            }
            previous.next = current.next
        }
        this.size--;
    }

    // Clear list ------------------------------->
    clearList(){
        this.head = null;
        this.size = 0;
    }

    // Print list data ------------------------------->
    printListData(){
        let current = this.head;
        while(current){
            console.log(current.data)
            current = current.next
        }
    }
};

//--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---//

const ll = new LinkedList()
console.log(ll.size)

//testing insertFirst() x 3 elementos
ll.insertFirst(100)
console.log(ll)
ll.insertFirst(200)
console.log(ll)
ll.insertFirst(300)
console.log(ll)

//testing printListData()
ll.printListData()
console.log(ll.size)

//testing insertLast() x 3 elementos
ll.insertLast(400)
console.log(ll)
ll.insertLast(500)
console.log(ll)
ll.insertLast(600)
console.log(ll)

//printListData()
ll.printListData()
console.log(ll.size)

//testing insertAt()
ll.insertAt(1500,4)
ll.insertAt(2600,5)
ll.insertAt(3700,6)

ll.insertAt(9999,0)
ll.insertAt(9009,20)

console.log('////')
ll.printListData();
console.log('////')

console.log(ll)
console.log(ll.size)

//testing getAt()
console.log('At index 0:');
ll.getAt(0);
console.log('At index 1:');
ll.getAt(1);
console.log('At index 6:');
ll.getAt(6);

//testing removeAt()
console.log('removeAt()')
console.log(JSON.stringify(ll))
ll.getAt(0);
ll.removeAt(0);
ll.getAt(0);
ll.removeAt(0);
ll.getAt(0);
ll.removeAt(0);
ll.getAt(0);

console.log(JSON.stringify(ll))
console.log(ll.size)
ll.getAt(5);
ll.getAt(6);
ll.removeAt(6)
ll.getAt(5);
ll.getAt(6);    //no retorna nada porque ya no existe

//testing clearList()
console.log(ll.size)
ll.clearList();
console.log(ll.size)
