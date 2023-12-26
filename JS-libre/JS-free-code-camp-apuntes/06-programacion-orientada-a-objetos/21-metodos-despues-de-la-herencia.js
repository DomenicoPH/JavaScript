// Añade métodos después de la herencia

/*
    Añade el código necesario para que el objeto Dog herede de Animal 
    y el constructor prototype de Dog sea establecido en Dog. 
    A continuación agrega el método bark() al objeto Dog, para que 
    beagle pueda "comer" eat() y "ladrar" bark(). 
    El método bark() debe imprimir Woof! por consola.
*/

function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Cambia solo el código debajo de esta línea
Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog
Dog.prototype.bark = function(){
  console.log('Woof!')
}
// Cambia solo el código encima de esta línea

let beagle = new Dog();

beagle.eat()
beagle.bark()