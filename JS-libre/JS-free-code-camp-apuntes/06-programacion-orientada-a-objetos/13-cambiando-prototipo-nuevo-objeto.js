// Cambiando el prototipo a un nuevo objeto

/* Añadiendo propiedades y métodos en conjunto */

function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
    numLegs: 4,
    eat: function(){
      console.log('grunch,grunch,grunch')
    },
    describe: function(){
      console.log('I am a dog')
    }
  };