// Binary tree | árbol binario

/*  Un árbol binario es una estructura de datos jerárquica 
    que consta de nodos, donde cada nodo tiene a lo sumo dos 
    hijos: izquierdo y derecho. 
    En JavaScript, se puede implementar como una clase con 
    métodos para insertar, eliminar y buscar nodos.

    Su funcionamiento se basa en la relación de jerarquía 
    entre nodos. El nodo raíz es el punto de partida y cada 
    nodo puede tener como máximo dos hijos, generalmente 
    llamados hijo izquierdo y hijo derecho. 
    Los nodos se organizan de manera que los elementos menores 
    se colocan en el subárbol izquierdo, mientras que los 
    elementos mayores se colocan en el subárbol derecho. 
    Esto facilita la búsqueda eficiente de datos, ya que se 
    puede realizar en tiempo logarítmico en el peor de los casos.
*/

// Modelo de árbol binario

class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.right = new BinaryTree(3);

console.log(root)
console.log(root.left)
console.log(root.right)