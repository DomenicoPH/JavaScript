// Entendiendo la propiedad 'constructor'

/*
    Escribe una función joinDogFraternity que tome como 
    parámetro candidate y que con la propiedad constructor, 
    devuelva true si el candidato es un Dog y si no lo es 
    debería devolver false.
*/

function Dog(name) {
  this.name = name;
}

function joinDogFraternity(candidate) {
  return candidate.constructor === Dog
}