// Usa el método de "filter" para extraer datos de un arreglo

/*
    Otra función útil de los arreglos es Array.prototype.filter() 
    o simplemente filter().

    filter Llama a una función sobre cada elemento del arreglo y 
    devuelve un nuevo arreglo, conteniendo solo los elementos para 
    los cuales la función devolvió un valor de verdadero - Es decir, 
    un valor que devuelve true si paso al constructor Boolean(). 
    En otras palabras, filtra el arreglo, basándose en la función 
    que se le pasa. 
    Al igual que map, hace esto sin necesidad de modificar el 
    arreglo original.

    La función callback acepta tres argumentos. El primer argumento 
    es el elemento actual que se está procesando. El segundo es el 
    índice de ese elemento y el tercero es el arreglo sobre el que 
    se llamó al método filter.

    A continuación se muestra un ejemplo en el que se utiliza el 
    método filter en el arreglo users para devolver un nuevo 
    arreglo que contiene sólo a los usuarios menores de 30 años. 
    Para que sea más fácil, el ejemplo solo utiliza el primer 
    argumento de la función callback.
*/

const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const usersUnder30 = users.filter(user => user.age < 30);
console.log(usersUnder30); 