//  Linked list - Lista enlazada

/*  Una "linked list" en JavaScript es una estructura de datos que consta de nodos, 
    donde cada nodo contiene un valor y una referencia al siguiente nodo en la secuencia. 
    En JavaScript, se implementa utilizando objetos.

    Funciona manteniendo una secuencia de nodos donde cada nodo tiene una referencia al 
    siguiente nodo en la lista. Inicia con un nodo inicial (head), que apunta al primer 
    elemento de la lista. Cada nodo tiene un valor y un enlace (o referencia) al siguiente 
    nodo. Al agregar un nuevo elemento, se crea un nodo que apunta al nuevo valor y se 
    enlaza con el nodo anterior. Esto permite la inserción y eliminación eficiente de 
    elementos, pero acceder a elementos aleatorios puede ser más lento ya que debe seguir 
    la secuencia de nodos para encontrar el elemento deseado.
*/

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
};

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }
    
    //métodos

    //añadir +
    append(value) {
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }
        this.tail = newNode;
    };

    //recorrer ->
    traverse(callback) {
        let currentNode = this.head;
        while(currentNode !== null){
            callback(currentNode);
            currentNode = currentNode.next;
        }
    }
};

//callback
const printNode = (node) => console.log(node.value);

//create linked list instance
const list = new LinkedList();

//añade elementos con el método 'append'
list.append([1,'el número uno']);
list.append([2,'me hago el dos']);
list.append([3,'los tres mosqueteros']);
list.append([4,'cuatro caminos']);
list.append([5,'cinco mentarios']);

//recorre el array con el método 'traverse' utilizando el callback 'printNode'
list.traverse(printNode)