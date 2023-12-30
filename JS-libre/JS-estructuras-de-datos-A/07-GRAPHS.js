// Graph | Grafo

class Graph{
    constructor(){
        this.nodes = [];        // Array de nodos
        this.adjList = {};      // Objeto: Lista de adjuntos
    }

    // Agregar un nodo al Grafo:
    addNode(node){
        this.nodes.push(node);      // Añadir al array de nodos
        this.adjList[node] = []     // En el objeto adjList creamos para la propiedad node un arreglo vacio.
    }

    // Agregar un enlace entre dos nodos:
    addEdge(node1, node2){
        this.adjList[node1].push(node2)
        this.adjList[node2].push(node1)
    }
};

// Graphs

const graph = new Graph();
console.log(graph);

graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addNode('E');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');

console.log(graph);
graph.adjList

/*
    Grafo Básico (graph)
    --------------------
    El grafo graph es un ejemplo básico de un grafo no dirigido. 
    Contiene nodos (A, B, C, D, E) y aristas que conectan estos 
    nodos para representar relaciones sin dirección específica 
    entre ellos. 
    Los nodos se conectan de la siguiente manera: A está 
    conectado a B y C, B está conectado a A y D, C está 
    conectado a A y E.
*/


// Animal Graph
const animalGraph = new Graph();
console.log(animalGraph);

animalGraph.addNode('Perros');
animalGraph.addNode('Gatos');
animalGraph.addNode('Moscas');
animalGraph.addNode('Gusanos');
animalGraph.addNode('Monos');
animalGraph.addNode('Osos');
animalGraph.addNode('Elefantes');
animalGraph.addNode('Cocodrilos');
animalGraph.addNode('Ratones');
animalGraph.addNode('Iguanas');

animalGraph.addEdge('Ratones', 'Elefantes');
animalGraph.addEdge('Elefantes', 'Cocodrilos');
animalGraph.addEdge('Cocodrilos', 'Gatos');
animalGraph.addEdge('Gatos', 'Iguanas');
animalGraph.addEdge('Iguanas', 'Monos');
animalGraph.addEdge('Monos', 'Osos');
animalGraph.addEdge('Osos', 'Perros');
animalGraph.addEdge('Perros', 'Moscas');
animalGraph.addEdge('Moscas', 'Ratones');

console.log(animalGraph);

/*
    Grafo de Animales (animalGraph)
    -------------------------------
    Este grafo representa una red de relaciones entre diferentes animales. 
    Los nodos son nombres de animales (Perros, Gatos, Moscas, etc.) y las 
    aristas representan relaciones entre ellos. Por ejemplo, Ratones están 
    conectados con Elefantes, Elefantes con Cocodrilos, Cocodrilos con Gatos, 
    y así sucesivamente, modelando relaciones específicas entre estos animales.
*/

// Position Graph
const positionGraph = new Graph();
console.log(positionGraph);

positionGraph.addNode('A - Top level - Maestros')
positionGraph.addNode('B - 2nd level - Tutores')
positionGraph.addNode('C - 3rd level - Custodios')
positionGraph.addNode('D - 4th level - Aprendices superiores')
positionGraph.addNode('E - 5th level - Aprendices intermedios')
positionGraph.addNode('F - 6th level - Aprendices iniciados')
positionGraph.addNode('G - 7th level - No iniciados')

positionGraph.addEdge('B - 2nd level - Tutores','A - Top level - Maestros');
positionGraph.addEdge('B - 2nd level - Tutores', 'C - 3rd level - Custodios');
positionGraph.addEdge('C - 3rd level - Custodios', 'D - 4th level - Aprendices superiores');
positionGraph.addEdge('D - 4th level - Aprendices superiores', 'E - 5th level - Aprendices intermedios');
positionGraph.addEdge('E - 5th level - Aprendices intermedios', 'F - 6th level - Aprendices iniciados');
positionGraph.addEdge('F - 6th level - Aprendices iniciados', 'G - 7th level - No iniciados');

console.log(positionGraph);

/*
    Grafo de Posiciones o Jerarquía (positionGraph)
    -----------------------------------------------
    Este grafo modela una jerarquía o estructura de posición. 
    Los nodos representan diferentes niveles de autoridad o categorías, 
    desde "Maestros" hasta "No iniciados". 
    Las aristas indican la relación jerárquica entre estos niveles, 
    por ejemplo, los "Tutores" están conectados con los "Maestros", 
    los "Custodios" con los "Tutores", y así sucesivamente, mostrando 
    la estructura de niveles o posiciones dentro de un sistema jerárquico.
*/