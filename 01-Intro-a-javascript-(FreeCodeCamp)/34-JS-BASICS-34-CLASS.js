// Class | clases

class TransbordadorEspacial {
    constructor(planeta){
        this.planeta = planeta
    }
}

var zeus = new TransbordadorEspacial('Júpiter');
console.log(zeus.planeta);

var apolo = new TransbordadorEspacial('Marte');
console.log(apolo.planeta);


//---//


class Mascota {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}

var gia = new Mascota('Gia', 6);

console.log(gia.nombre);
console.log(gia.edad);

var name = gia.nombre
var age = gia.edad
var frase = `Mi mascota se llama ${name} y tiene ${age} años.`

console.log(frase);

var arnulfo = new Mascota('Arnulfo', 8);
var cristoforo = new Mascota('Cristoforo', 11);
var samuelo = new Mascota('Samuelo', 2);

let joke = `Los amigos de ${gia.nombre} son tres: ${arnulfo.nombre}, ${cristoforo.nombre} y ${samuelo.nombre}`
console.log(joke);
