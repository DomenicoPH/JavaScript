//  Comprende los peligros de usar el código imperativo

/*
    La programación funcional es un buen hábito. Mantiene tu código fácil de manejar 
    y evita que tengas errores incómodos. Pero antes de llegar allí, veamos un enfoque 
    imperativo de la programación para destacar dónde pueden tener problemas.

    En inglés (y muchos otros idiomas), la tensión imperativa se utiliza para dar órdenes. 
    De forma similar, un estilo imperativo en la programación es aquel que le da a la 
    computadora un conjunto de sentencias para llevar a cabo una tarea.

    A menudo las sentencias cambian el estado del programa, como actualizar variables 
    globales. Un ejemplo clásico es escribir un bucle for que dé instrucciones exactas 
    para iterar sobre los índices de un arreglo.

    Por el contrario, la programación funcional es una forma de programación declarativa. 
    Le dice al ordenador lo que quieres hacer llamando a un método o función.

    JavaScript ofrece muchos métodos predefinidos que manejan tareas comunes para que no 
    necesites escribir cómo debe ejecutarlas el equipo. Por ejemplo, en lugar de usar el 
    bucle for mencionado anteriormente se podría llamar al método map que maneja los detalles 
    de iteración sobre un array. Esto ayuda a evitar errores semánticos, como los "Off By One 
    Errors" que fueron cubiertos en la sección Debugging.

    Considere el escenario: está navegando por la web en su navegador y quiere rastrear las 
    pestañas que ha abierto. Intentemos modelar esto con un código simple orientado a objetos.

    Un objeto ventana está formado por pestañas y normalmente tienes más de una abierta. 
    Los títulos de cada sitio abierto en cada objeto ventana se mantienen en un arreglo. 
    Después de trabajar en el navegador (abriendo nuevas pestañas, combinando ventanas 
    y cerrando pestañas), deseas imprimir las pestañas que todavía están abiertas. 
    Las pestañas cerradas se eliminan de la matriz y las nuevas pestañas (por 
    simplicidad) se añaden al final de la misma.

    El editor de código muestra una implementación de esta funcionalidad con funciones para 
    tabOpen(), tabClose()y join(). El array tabs es parte del objeto ventana que almacena el 
    nombre de las páginas abiertas.
*/

/*
    Examine el código en el editor. Está utilizando un método que tiene efectos secundarios 
    en el programa, causando un comportamiento incorrecto. La lista final de pestañas abiertas, 
    almacenadas en finalTabs.tabs deberia ser:
    
    ['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 
    'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab'] 
    
    pero la lista producida por el código es un poco diferente.

    Cambia Window.prototype.tabClose para que elimine la pestaña correcta.
*/

/* --------------------------------------------------------------------------------- */
// tabs es un arreglo de títulos de cada sitio abierto dentro de la ventana
const Window = function(tabs) {
  this.tabs = tabs; // Mantenemos un registro del arreglo dentro del objeto
};

// Cuando unes dos ventanas en una
Window.prototype.join = function(otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// Cuando abres una nueva pestaña al final
Window.prototype.tabOpen = function(tab) {
  this.tabs.push('new tab'); // Abramos una nueva pestaña por ahora
  return this;
};

// Cuando cierras una pestaña
Window.prototype.tabClose = function(index) {

  // Cambia solo el código debajo de esta línea

  const tabsBeforeIndex = this.tabs.splice(0, index); // Obtiene las pestañas antes de la pestaña
  //const tabsAfterIndex = this.tabs.splice(index + 1); // Error
  const tabsAfterIndex = this.tabs.splice(1)  // fixed! Obtiene las pestañas después de la pestaña

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Únelos juntos

  // Cambia solo el código encima de esta línea

  return this;
};

// Vamos a crear tres ventanas del navegador
const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Tu casilla de correo, drive y otros sitios de trabajo
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Sitios sociales
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Sitios de entretenimiento

// Ahora completa la apertura de la pestaña, cierre, y otras operaciones
const finalTabs = socialWindow
  .tabOpen() // Abre una nueva pestaña para memes de gatos
  .join(videoWindow.tabClose(2)) // Cierra la tercera pestaña en videoWindow y une
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);