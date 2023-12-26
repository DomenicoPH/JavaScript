// Utiliza closures para evitar que las propiedades de un objeto se puedan modificar desde fuera

/*
    Cambia como weight es declarada en la función Bird para que sea una variable privada. 
    Después, crea un método getWeight que devuelva el valor 15 para weight.
*/

function Bird() {
  this.getWeight = function(){
    let weight =  15
    return weight
  }
}

let birdie = new Bird()
console.log(birdie.getWeight())
birdie.weight = 50
console.log(birdie.getWeight())
// NO ES POSIBLE modificar la propiedad weight de monkey

// *** *** *** *** //

function Ape(){
    this.weight = 20
    this.getWeight = function(){
        return this.weight;
    }
}

let monkey = new Ape()
console.log(monkey.getWeight())
monkey.weight = 50
console.log(monkey.getWeight())
// ES POSIBLE modificar la propiedad weight de monkey