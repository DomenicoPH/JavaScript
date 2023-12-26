// Hereda Comportamientos de un supertipo (supertype)

/*
    En el desafío anterior, creaste un supertype llamado Animal 
    que definía comportamientos compartidos por todos los animales.
*/

    function AnimalTest() { }
    AnimalTest.prototype.eat = function() {
      console.log("nom nom nom");
    };

/*
    Este desafío y el siguiente cubrirán como reutilizar los métodos 
    de Animal dentro de Bird y Dog sin tener que definirlos otra vez. 
    Se utiliza una técnica llamada herencia. 
    Este desafío cubre el primer paso: crear una instancia del supertype 
    (o objecto padre). Ya conoces una forma de crear una instancia de 
    Animal utilizando el operador new:
*/

    let animal1 = new AnimalTest();

/*
    Hay algunas desventajas cuando se utiliza esta sintaxis para la 
    herencia, pero son demasiado complejas para el alcance de este 
    desafío. En su lugar, hay un enfoque alternativo que no tiene 
    esas desventajas:
*/

    let animal2 = Object.create(AnimalTest.prototype);

/*
    Object.create(obj) crea un objeto nuevo y establece obj como el 
    prototype del nuevo objeto. Recuerda que prototype es como la "receta" 
    para crear un objecto. Al establecer el prototype de animal como el 
    prototype de Animal, estás dándole a la instancia animal la misma 
    “receta" que a cualquier otra instancia de Animal.
*/

    animal1.eat();
    animal1 instanceof AnimalTest;
        console.log(animal1 instanceof AnimalTest)

    animal2.eat();
    animal2 instanceof AnimalTest;
        console.log(animal2 instanceof AnimalTest)


// ---> Utiliza Object.create para crear dos instancias de Animal llamadas duck y beagle:

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

let duck = Object.create(Animal.prototype);
duck.eat()

let beagle = Object.create(Animal.prototype);
beagle.eat()