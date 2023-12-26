// Verificar pertenencia a función constructora con instanceof

/*
    Crea una nueva instancia del constructor House, 
    llamándola myHouse y pasando el número de habitaciones. 
    Luego, usa instanceof para verificar que es una 
    instancia de House.
*/

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

let myHouse = new House(14)
let verify = myHouse instanceof House
console.log(verify)

// Ex2
function Dog(nombre,color,edad,sexo,raza){
    this.nombre = nombre
    this.color = color
    this.edad = edad
    this.sexo = sexo
    this.raza = raza
}
    //dogs
    let perro01 = new Dog('Juanito','negro',6,'macho','chuscazo');
    let perro02 = new Dog('Pirinola','verde',3,'hembra','chuscaza');
    let perro03 = new Dog('Sacocho','marrón',10,'macho','chuscazo');

    //verify
    let dogVerify;
    dogVerify = perro01 instanceof Dog
    console.log(dogVerify);
    dogVerify = perro01 instanceof House
    console.log(dogVerify);