//  Introducción a la currificación y a la aplicación de funciones parciales

/*
    La aridad de una función es el número de argumentos que requiere. 
    Currificar una función significa convertir una función de 
    N aridades a N funciones de 1 aridad.

    En otras palabras, reestructura una función, por lo que toma un 
    argumento, luego devolverá otra función que toma el siguiente 
    argumento, y así sucesivamente.

    A continuación un ejemplo:
*/

function unCurried(x, y) {
  return x + y;
}

function curried(x) {
  return function(y) {
    return x + y;
  }
}

console.log(curried(1)(2))
// curried(1)(2) devolverá 3.
// const curried = x => y => x + y

/*
    Esto es útil en tu programa si no puedes proporcionar todos los 
    argumentos a una función al mismo tiempo. 
    Puedes guardar la llamada a cada función dentro de una variable, 
    la cual mantendrá la referencia de la función devuelta que toma 
    el siguiente argumento cuando este disponible. 
    Aquí hay un ejemplo utilizando la función currificada del ejemplo 
    anterior:
*/

const funcForY = curried(1);
console.log(funcForY(2)); // 3

/*
    Similarmente, la aplicación de una función parcial puede describirse 
    como aplicar algunos argumentos a la función al mismo tiempo y 
    devolviendo una función que se aplica a más argumentos. 
    A continuación un ejemplo:
*/

function impartial(x, y, z) {
  return x + y + z;
}

const partialFn = impartial.bind(this, 1, 2);
partialFn(10); // 13

/*
    Completa el cuerpo de la función add para que use currificación 
    para añadir parámetros x, y, y z.
*/

/* --------------------------------------------------------------------------------- */

function add(x) {
    // Cambia solo el código debajo de esta línea
      return function(y){
        return function(z){
          return x + y + z
        }
      }
  
    // Cambia solo el código encima de esta línea
  }
  
  console.log(add(1)(5)(6))
  console.log(add(10)(20)(30))
  console.log(add(100)(50)(50))