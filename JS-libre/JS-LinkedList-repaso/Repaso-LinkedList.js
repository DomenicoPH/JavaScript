// Linked List
// REF: https://youtu.be/9YddVVsdG5A?si=KvsvXYJwAPSWlz1H

function LinkedList(){
    this.length = 0
    this.next = null
}

function Node(value){
    this.value = value
    this.next = null
}

// métodos

// size -> Muestra el número de elementos de la lista
LinkedList.prototype.size = function(){
    return this.length
}

// add -> Añade al final
LinkedList.prototype.add = function(value){
    let node = new Node(value)
    if(!this.head){
        this.head = node
    } else {
        let current = this.head
        while(current.next){
            current = current.next
        }
        current.next = node
    }
    this.length++
}

// remove -> Remueve un valor específico de la lista
LinkedList.prototype.remove = function(value){
    let current = this.head
    let prev
    if(current.value === value){
        this.head = current.next
    } else {
        while(current.value !== value){
            prev = current
            current = current.next
        }
        prev.next = current.next
    }
    this.length--
}

// printList   |   Imprime la lista
LinkedList.prototype.printList = function(){
    let current = this.head
    while(current){
        console.log(current.value)
        current = current.next
    }
}

const myList = new LinkedList()

myList.add(1)
myList.add(2)
myList.add('A')
myList.add(3)
myList.add(4)
myList.add(5)
myList.add('Z')

myList.remove('A')
myList.remove('Z')

console.log('Size: ', myList.size())
myList.printList()