// Utiliza una IIFE para crear un módulo

/*
    Crea un módulo llamado funModule para envolver 
    los dos mixins isCuteMixin y singMixin. 
    funModule debe devolver un objeto.
*/

let funModule = (function(){
  return {
    isCuteMixin: function(obj) {
      obj.isCute = function() {
        return true;
      };
    },
    singMixin: function(obj) {
      obj.sing = function() {
        console.log("Singing to an awesome tune");
      };
    }
  }
})();