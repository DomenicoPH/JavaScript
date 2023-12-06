// Métodos | Funciones dentro de objetos

const cagnazzo = {
    nombre: 'Cagnazzo',
    presentarse: function(){
        return `Hola, me llamo ${this.nombre}`
    }
};
console.log(cagnazzo.presentarse())

//ES6
const rubicante = {
    nombre: 'Rubicante',
    presentarse(){ return `Hola, me llamo ${this.nombre}` }
};
console.log(rubicante.presentarse())