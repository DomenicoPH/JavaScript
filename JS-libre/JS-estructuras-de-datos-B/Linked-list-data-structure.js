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

//---//

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

    // Insert first node

    // Insert last node

    // Insert at index

    // Get at index

    // Remove at Index

    // Clear list

    // Print list data
}