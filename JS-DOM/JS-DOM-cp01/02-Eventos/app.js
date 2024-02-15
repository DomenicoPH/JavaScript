const wrapper = document.querySelector('[data-id="wrapper"]');
const input = document.querySelector('[type="text"]');
const changeUser = document.querySelector('[data-id="name"]');
const section = document.querySelector('.section')
const buttonShow = document.querySelector('[data-id="button-show"]')
const buttonHide = document.querySelector('[data-id="button-hide"]')

// matches() & closest()

const elements = document.querySelectorAll('[data-id]') // Todos los elementos que tengan la propiedad 'data-id'
//console.log(elements)

// matches()
for(element of elements){
    //console.log(element)
    const currentElement = element.matches('[data-id="button-show"]')
    if(currentElement){
        console.log(element)
        console.log(`El botón ${element.nodeName} contiene el valor button-show en su atributo`)
    }
};


// * Seleccionar todos los elementos del siguiente tipo (div, input, button, section)
const divs = document.querySelectorAll('div')
const inputs = document.querySelectorAll('input')
const buttons = document.querySelectorAll('button')
const sections = document.querySelectorAll('section')
//console.log(divs)
//console.log(inputs)
//console.log(buttons)
//console.log(sections)

// * Seleccionar todos los elementos que tengan la siguiente propiedad (data-id, type, class, src)
const withDataType = document.querySelectorAll('[data-id]')
const withType = document.querySelectorAll('[type]')
const withClass = document.querySelectorAll('[class]')
const withSrc = document.querySelectorAll('[src]')
//console.log(withDataType)
//console.log(withType)
//console.log(withClass)
//console.log(withSrc)