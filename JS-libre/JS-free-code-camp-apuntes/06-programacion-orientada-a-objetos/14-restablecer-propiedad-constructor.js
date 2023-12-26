// Restablecer la propiedad 'constructor' al cambiar el prototipo

/*
    Hay un efecto secundario crucial de ajustar manualmente el prototipo a un nuevo objeto. 
    ¡Elimina la propiedad constructor! Esta propiedad puede ser usada para verificar cuál 
    función de constructor creó la instancia. Sin embargo, dado que la propiedad ha sido 
    sobrescrita, ahora devuelve resultados falsos.
*/

function Bird(name) {
    this.name = name
};

function Dog(name) {
  this.name = name;
};

Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

let gia = new Dog('Gia')
console.log(gia)
//testing
console.log(gia.constructor === Dog)
console.log(gia.constructor === Bird)
console.log(gia instanceof Dog)
console.log(gia instanceof Bird)