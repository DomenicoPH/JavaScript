//  Stack - Pila

/*  Una pila o stack es una estructura de datos lineal que sigue 
    el principio LIFO (Last In, First Out), es decir, el último 
    elemento añadido a la pila es el primero en ser eliminado.
    ♦  Operaciones de una pila/stack
        - push: Añade un elemento al tope de la pila.
        - pop: Elimina y devuelve el elemento en el tope de la pila.
        - peek: Muestra el elemento en el tope de la pila sin eliminarlo.
        - isEmpty: Verifica si la pila está vacía.
*/


// Modelo de pila:

class Stack {
    constructor() {
        this.items = []
    }
        //      -->     Añade 'item' al final de la pila
    push(item) {
        this.items.push(item)
    }
        //      -->     Toma el último 'item' de la pila y lo extrae
    pop() {     
        return this.items.pop();
    }
        //      -->     Muestra el último elemento añadido a la pila (no lo extrae)
    peek() {
        return this.items[this.items.length - 1]
    }
        //      -->     Retorna true si la pila esta vacía y false si contiene algún elemento
    isEmpty() {
        return this.items.length === 0
    }
}

// Instancia de una Pila:

const myStack = new Stack();
console.log(myStack.isEmpty())  // true | la pila está vacía

// push de 4 elementos:
myStack.push(['001', 'Red Raddux', 'red monkey', 16])
myStack.push(['002', 'Kammit Dammit', 'blue monkey', 19])
myStack.push(['003', 'Makakas Mun', 'white monkey', 23])
myStack.push(['004', 'Pedro Gomez', 'normal human', 45])

console.log(myStack.isEmpty())  // true | la pila no está vacía. 4 elementos añadidos

console.log(myStack);
console.log(myStack.items[3])
console.log(myStack.items[2])
console.log(myStack.items[1])
console.log(myStack.items[0])

let salida = myStack.pop();
console.log(salida);
salida = myStack.pop()
console.log(salida);
salida = myStack.pop()
console.log(salida);
salida = myStack.pop()
console.log(salida);

console.log(myStack.isEmpty())  // true | la pila vuelve a estar vacía