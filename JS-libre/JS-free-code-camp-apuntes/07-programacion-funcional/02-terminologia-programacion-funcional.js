// Comprende la terminología de la programación funcional

/*
    El equipo de FCC tuvo un cambio de humor y ahora quiere dos tipos de té: 
    té verde y té negro. Hecho general: Los cambios del estado de ánimo de 
    los clientes son bastante concurrentes.

    Con esa información, tendremos que volver a visitar la función getTea del 
    último desafío para manejar varias solicitudes de té. Podemos modificar 
    getTea para aceptar una función como parámetro y así poder cambiar el 
    tipo de té que prepara. 
    Esto hace que getTea sea más flexible y le da al programador más control 
    cuando las solicitudes del cliente cambian.

    Pero primero, cubramos alguna terminología de la programación funcional:

    Callbacks son las funciones que se deslizan o pasan a otra función para 
    decidir la invocación de esa función. Es posible que las hayas visto pasar 
    a otros métodos, por ejemplo en filter, la función callback le dice a 
    JavaScript los criterios para filtrar un arreglo.

    Las funciones que pueden ser asignadas a una variable, pasadas a otra 
    función o devueltas desde otra función como cualquier otro valor normal, 
    se llaman funciones de primera clase. 
    En JavaScript, todas las funciones son funciones de primera clase.

    Las funciones que toman una función como argumento, o devuelven una función 
    como valor de retorno, se denominan funciones higher order.

    Cuando las funciones se pasan o se devuelven desde otra función, las funciones 
    que se pasaron o devolvieron se pueden llamar lambda.
*/

/*
    Prepara 27 tazas de té verde (green tea) y 13 tazas de té negro (black tea) 
    y almacénalas en las variables tea4GreenTeamFCC y tea4BlackTeamFCC, 
    respectivamente. Ten en cuenta que la función getTea ha sido modificada 
    por lo que ahora recibe una función como primer argumento.

    Nota: Los datos (el número de tazas de té) son suministrados como el último argumento. 
    Discutiremos más sobre esto en lecciones posteriores.
*/

/* --------------------------------------------------------------------------------- */
// Función que retorna una cadena de texto representando una taza de té verde
const prepareGreenTea = () => 'greenTea';

// Función que retorna una cadena de texto representando una taza de té negro
const prepareBlackTea = () => 'blackTea';

/*
    Dada una función (representando el tipo de té) y el número de tazas necesarias, la 
    siguiente función retorna un arreglo de cadenas de texto (cada una representando un tipo específico de té).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Cambia solo el código debajo de esta línea
const tea4GreenTeamFCC = getTea(prepareGreenTea,27);
const tea4BlackTeamFCC = getTea(prepareBlackTea,13);
// Cambia solo el código encima de esta línea

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);