// Itera sobre todas las propiedades

/*
    Ahora has visto dos tipos de propiedades: propiedades directas 
    y propiedades prototype. Las propiedades directas se definen 
    directamente en la propia instancia del objeto. Y las 
    propiedades prototype se definen en el prototype.

    Agrega todas las propiedades directas de beagle al arreglo 
    ownProps. Agrega todas las propiedades prototype de Dog al 
    arreglo prototypeProps.
*/

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

for(let prop in beagle){
  if(beagle.hasOwnProperty(prop)){
    ownProps.push(prop)
  } else {
    prototypeProps.push(prop)
  }
}

console.log(ownProps)
console.log(prototypeProps)