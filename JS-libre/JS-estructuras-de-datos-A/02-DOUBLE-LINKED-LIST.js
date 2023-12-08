//  Double Linked list - Lista enlazada doble

/*  Una "double linked list" (lista doblemente enlazada) en JavaScript 
    es una estructura de datos similar a una linked list, pero con la 
    diferencia de que cada nodo contiene referencias tanto al siguiente 
    nodo como al nodo anterior.

    En una double linked list, cada nodo contiene un valor y dos referencias: 
    una al nodo siguiente (next) y otra al nodo anterior (prev). Esto permite 
    la navegación en ambas direcciones: desde el inicio hasta el final y 
    viceversa. Esta flexibilidad agrega complejidad adicional a la hora de 
    insertar o eliminar nodos, ya que se deben mantener las referencias tanto 
    al nodo siguiente como al nodo anterior al realizar operaciones de inserción 
    o eliminación. Sin embargo, permite un acceso más rápido y eficiente a los 
    nodos adyacentes, ya que no es necesario recorrer la lista desde el principio 
    o el final para encontrar elementos cercanos.
*/

class Node {
    constructor(value, prev = null, next = null) {
        this.value = value;
        this.next = next;
        this.prev = prev;
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
        const newNode = new Node(value, this.tail);
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
list.append([1,'uno']);
list.append([2,'dos']);
list.append([3,'tres']);
list.append([4,'cuatro']);
list.append([5,'cinco']);

//recorre el array con el método 'traverse' utilizando el callback 'printNode'
list.traverse(printNode)