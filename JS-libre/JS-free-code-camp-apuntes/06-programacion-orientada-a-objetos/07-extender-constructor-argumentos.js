// Función constructora con argumentos

/*
    Crea otro constructor Dog. Esta vez, configúralo para que 
    tome los parámetros name y color, y ten la propiedad numLegs 
    fija a 4. Luego crea un nuevo Dog almacenado en una variable 
    terrier. Pasale dos cadenas de texto como argumentos para 
    las propiedades name y color.
*/

function Dog(name, color) {
  this.name = name
  this.color = color
  this.numLegs = 4
};

let terrier = new Dog('Fito','brown')
console.log(terrier)

let muzgo = new Dog('Muzgo','green')
console.log(muzgo)
console.log(muzgo.name)
console.log(muzgo.color)