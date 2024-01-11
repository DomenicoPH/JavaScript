//  Aplicar programación funcional para convertir cadenas a slugs de URL

/*
    Rellena la función urlSlug para convertir una cadena title y devolver 
    la versión con guiones para la URL. Puedes utilizar cualquiera de los 
    métodos vistos en esta sección y no utilices replace. 
    Aquí están los requisitos:

    ♦ La entrada es una cadena con espacios y palabras, en mayúsculas y minúsculas
    ♦ El resultado es una cadena con los espacios entre palabras reemplazadas por un guion (-)
    ♦ El resultado debe contener todas las letras minúsculas
    ♦ El resultado no debe tener espacios
*/

// Cambia solo el código debajo de esta línea
function urlSlug(title) {
    return title
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .join('-')
  }

  /* --------------------------------------------------------------------------------- */
  
  // Cambia solo el código encima de esta línea
  console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"))
  console.log(urlSlug(" A Mind NEEDS Books LIKE  A  Sword Needs  A  Whetstone"))
  console.log(urlSlug("Winter Is Coming"))
  console.log(urlSlug(" Winter Is  Coming"))
  console.log(urlSlug("Hold The Door"))