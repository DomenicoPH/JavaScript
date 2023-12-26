// (DRY) Don't Repeat Yourself

/*
    Hay un principio en la programación llamado No te repitas 
    (Don't Repeat Yourself "DRY"). La razón por la que el código 
    repetido es un problema es porque cualquier tipo de cambio 
    requiere corregir código en múltiples lugares. 
    Esto suele significar más trabajo para los programadores 
    y más espacio para errores.
*/

// Observa en el siguiente ejemplo como el método 'describe' es compartido por Bird y Dog:
    /*
    Bird.prototype = {
      constructor: Bird,
      describe: function() {
        console.log("My name is " + this.name);
      }
    };

    Dog.prototype = {
      constructor: Dog,
      describe: function() {
        console.log("My name is " + this.name);
      }
    };
    */
// El método describe se repite en dos lugares. El código se puede editar para seguir el principio DRY creando un supertype (o padre) llamado Animal:
    /*
    function Animal() { };

    Animal.prototype = {
      constructor: Animal, 
      describe: function() {
        console.log("My name is " + this.name);
      }
    };
    */
// Dado que Animal incluye el método describe, puedes eliminarlo de Bird y Dog:
    /*
    Bird.prototype = {
      constructor: Bird
    };

    Dog.prototype = {
      constructor: Dog
    };
    */  
/*  ---> El método eat se repite tanto en Cat como Bear. 
    Edita el código utilizando el principio DRY, moviendo 
    el método eat al supertype Animal. */
    
    function Cat(name) {
      this.name = name;
    }
    Cat.prototype = {
        constructor: Cat
    }
    
    function Bear(name) {
      this.name = name;
    }
    Bear.prototype = {
        constructor: Bear
    }
    
    function Animal() { }
    
    Animal.prototype = {
      constructor: Animal,
      eat: function() {
        console.log("nom nom nom");
      }
    };

    let felix = new Cat('Felix')
    console.log(felix)

    let yogui = new Bear('Yogui')
    console.log(yogui)
