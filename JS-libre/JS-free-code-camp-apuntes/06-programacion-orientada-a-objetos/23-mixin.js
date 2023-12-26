// Utiliza un "mixin" para añadir un comportamiento común entre objetos no relacionados

/*
    Como ya has visto, el comportamiento se comparte mediante una herencia. 
    Sin embargo, hay algunos casos en los que la herencia no es la mejor opción. 
    La herencia no funciona bien con objetos que no están relacionados como Bird 
    y Airplane. 
    Ambos pueden volar pero un Bird no es un tipo de Airplane y viceversa.

    Para objetos no relacionados es mejor utilizar mixins. Un "mixin" permite a 
    otros objetos utilizar una colección de funciones.

    let flyMixin = function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      }
    };

    El flyMixin toma a cualquier objeto y le da el método fly.

    let bird = {
      name: "Donald",
      numLegs: 2
    };

    let plane = {
      model: "777",
      numPassengers: 524
    };

    flyMixin(bird);
    flyMixin(plane);

    Aquí bird y plane son pasados a flyMixin el cual después asigna la función fly a cada objeto. 
    Ahora bird y plane pueden volar:

    bird.fly();
    plane.fly();

    La consola mostraría la cadena Flying, wooosh! dos veces, una por cada llamada a .fly().
    Ten en cuenta cómo el mixin permite que el mismo método fly sea reutilizado por los objetos 
    bird y plane los cuales no están relacionados.
*/

/*
    Crea un mixin llamado glideMixin que defina un método llamado glide. 
    Luego utiliza el glideMixin para dar a bird y boat la habilidad de planear.
*/

let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Cambia solo el código debajo de esta línea
let glideMixin = function(obj){
  obj.glide = function(){
    console.log('I do glide')
  }
}
glideMixin(bird)
glideMixin(boat)

bird.glide()
boat.glide()