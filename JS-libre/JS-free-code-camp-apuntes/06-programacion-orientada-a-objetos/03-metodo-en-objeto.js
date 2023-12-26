// Método en un objeto

/*  Usando el objeto dog, asígnale un método 
    llamado sayLegs. El método debe devolver 
    la frase This dog has 4 legs. */

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function(){
    return `This dog has ${dog.numLegs} legs.`
  }
};

dog.sayLegs();
console.log(dog.sayLegs())