// Prototype

/* Añade una propiedad numLegs al prototype de Dog */

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4

let beagle = new Dog("Snoopy");
console.log(beagle)
console.log(beagle.name)
console.log(beagle.numLegs)

console.log(beagle.tail)
Dog.prototype.tail = 1
console.log(beagle.tail)