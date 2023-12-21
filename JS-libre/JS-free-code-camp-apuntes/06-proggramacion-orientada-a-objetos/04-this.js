// This

/*  Modifica el método dog.sayLegs 
    para eliminar cualquier referencia 
    a dog. Utiliza 'this' */

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

dog.sayLegs();
console.log(dog.sayLegs());