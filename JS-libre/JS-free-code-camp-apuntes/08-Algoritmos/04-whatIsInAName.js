//  ¿Donde estás?

/*
    Crea una función que busque a través de un arreglo de objetos (primer argumento) 
    y devuelva un arreglo de todos los objetos que tengan pares de nombre y valor 
    coincidentes (segundo argumento). Cada par de nombre y valor del objeto fuente 
    tiene que estar presente en el objeto de la colección si se va a incluir en el 
    arreglo devuelto.

    Por ejemplo, si el primer argumento es: 
    
    [{ first: "Romeo", last: "Montague" }, 
     { first: "Mercutio", last: null }, 
     { first: "Tybalt", last: "Capulet" }]
    
    y el segundo argumento es: 
     
    { last: "Capulet" } 
    
    entonces debes devolver el tercer objeto del arreglo (el primer argumento), 
    porque contiene el nombre y su valor, el cual fue pasado como segundo argumento.

*/

function whatIsInAName(collection, source) {            // Recibe dos argumentos: (array de objs) y (obj de referencia)
  return collection.filter(obj => {                     // Utilizando el método filter para crear un nuevo array basado en la condición dada
    for(let key in source){                             // Iterando sobre las claves del objeto source
      if(obj[key] !== source[key]){                     // Comparando los valores de las claves correspondientes en el objeto de la colección y el objeto source
      }
      return false                                      // Si los valores no coinciden, el objeto no cumple con los criterios y se descarta (X)
    }
    return true                                         // Si se recorren todas las claves sin encontrar discrepancias, el objeto cumple con los criterios y se incluye en el nuevo array
  })
}

let test1 = whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })
    console.log(test1)
let test2 = whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 })
    console.log(test2)
let test3 = whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })
    console.log(test3)
let test4 = whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })
    console.log(test4)
let test5 = whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 })
    console.log(test5)