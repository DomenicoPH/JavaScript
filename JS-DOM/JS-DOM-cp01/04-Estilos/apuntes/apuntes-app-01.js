const title = document.querySelector('.title')
const inputColor = document.querySelector('[type="color"]')
const inputRange = document.querySelector('[type="range"]')

//setProperty() & removeProperty()

console.log(title.style); // Retorna únicamente propiedades CSS 'en línea'

title.style.fontFamily = 'cursive'
title.style.color = 'var(--color-title)'
title.style.fontSize = '4rem'

console.log('La fuente del título es', title.style.fontFamily)
console.log('El color del título es', title.style.color)
console.log('El tamaño del título es', title.style.fontSize)

//setProperty
document.documentElement.style.setProperty('--color-title','hotpink')
console.log(title.style.color)
console.log(title)

//removeProperty()
title.style.removeProperty('font-family')
title.style.removeProperty('color') 
title.style.removeProperty('font-size')

//borrar todos los estilos con setAttr
//title.setAttribute('style','')  //seteamos la propiedad 'style' en ''