// Función constructora para crear objetos

/*
    Utiliza el constructor Dog de la última lección 
    para crear una nueva instancia de Dog, 
    asignándolo a una variable hound.
*/

function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}

let hound = new Dog
console.log(hound)
console.log(hound.name)
console.log(hound.color)
console.log(hound.numLegs)