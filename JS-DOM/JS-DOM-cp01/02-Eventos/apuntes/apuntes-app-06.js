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
    /*  si el elemento tiene un atributo data-id con el valor "button-show". 
        Si el elemento coincide con este selector, currentElement será true; 
        de lo contrario, será false. */
    if(currentElement){
        console.log(element)
        console.log(`El elemento "${element.nodeName}" contiene el valor "button-show" en su atributo "data-id".`)
    }
};

//----------------------------------------------------------------------------------------------------------
// -- classed --> atributo 'class'
const classed = document.querySelectorAll('[class]')
for(classedItem of classed){
    const current = classedItem.matches('[class="wrapper"]')
    if(current){
        console.log(classedItem)
        console.log(`El elemento "${classedItem.nodeName}" contiene el valor "wrapper" en su atributo "class".`)
    }
}
// -- typed --> atributo 'type'
const typed = document.querySelectorAll('[type]')
for(typedItem of typed){
    const current = typedItem.matches('[type="text"]')
    if(current){
        console.log(typedItem)
        console.log(`El elemento "${typedItem.nodeName}" contiene el valor "text" en su atributo "type".`)
    }
}
//----------------------------------------------------------------------------------------------------------

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

// closest()
const form = document.querySelector('form')
form.setAttribute('id','formulario')

console.log(input.closest('.wrapper'))          // Muestra su ancestro más cercano con 'class' = 'wrapper'
console.log(input.closest('#formulario'))       // Muestra su ancestro más cercano con 'id' = 'formulario'
console.log(buttons[0].closest('.section'))     // Muestra su ancestro más cercano con 'class' = 'section'