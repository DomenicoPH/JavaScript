// https://youtube.com/playlist?list=PLC3y8-rFHvwg6nsAOfC5Is18KB2DrVOJy&si=fAjweYwtzSyKEReB

/* Stack */

/*
    Las pilas o 'stacks' funcionan bajo el principio LIFO: Last IN | First OUT
    Esto significa que el primer elemento en entrar en la pila será el último
    en salir y el último en entrar, el primero en salir.

    Una forma de visualizarlo es con una pila de platos: el plato de mas abajo
    será el último en ser lavado mientras que el que está encima, el último en
    añadirse a la pila, será el primero en ser lavado.

    Los métodos utilizados para las pilas son: push() para añadir al final y
    pop() para sustraer del final.
*/

function Stack(){
    this.items = []

    // Método para agregar elemento a la pila   |   PUSH
    this.push = (item) => {
        this.items.push(item)
    };

    // Método para eliminar el elemento superior de la pila |   POP
    this.pop = () => {
        if(this.isEmpty()){
            return 'Nada que borrar: Pila vacía'
        }
        return this.items.pop()
    };

    // Método para obtener el elemento superior de la pila sin eliminarlo   |   PEEK
    this.peek = () => {
        if(this.isEmpty()){
            return 'Pila vacía'
        }
        return this.items[this.items.length - 1]
    };

    // Método para verificar si la pila está vacía  |   ISEMPTY
    this.isEmpty = () => {
        return this.items.length === 0
    };

    // Método para obtener el tamaño de la pila |   SIZE
    this.size = () => {
        return this.items.length;
    }

};

// Stack Testing:
const stack = new Stack();
console.log(stack.items)
console.log(stack.isEmpty())
console.log(stack.size())

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)

console.log(stack.isEmpty())
console.log(stack.size())
console.log(stack.peek())

stack.pop() // Borra el último
console.log(stack.peek())   // Muestra el último

stack.pop() // Borra el último
console.log(stack.peek())   // Muestra el último

console.log(stack.size())

console.log(stack.items)