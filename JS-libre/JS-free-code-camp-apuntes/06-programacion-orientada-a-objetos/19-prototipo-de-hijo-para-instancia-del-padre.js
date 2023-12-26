// Establece el prototipo de hijo para una instancia del padre

/*
    En el desafío anterior, viste el primer paso para heredar 
    el comportamiento del supertipo (o padre) Animal: 
    creando una nueva instancia de Animal.

    Este desafío cubre el siguiente paso: establecer el 
    prototipo prototype del subtipo (o hijo) — en este caso, 
    Bird — para ser una instancia de Animal.
*/

Bird.prototype = Object.create(Animal.prototype);