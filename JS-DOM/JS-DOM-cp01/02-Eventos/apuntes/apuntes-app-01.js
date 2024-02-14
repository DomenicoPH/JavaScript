const wrapper = document.querySelector('[data-id="wrapper"]');
const input = document.querySelector('[type="text"]');
const changeUser = document.querySelector('[data-id="name"]');
const section = document.querySelector('.section')
const buttonShow = document.querySelector('[data-id="button-show"]')
const buttonHide = document.querySelector('[data-id="button-hide"]')

// Eventos
// https://developer.mozilla.org/es/docs/Web/Events

/* 

input.addEventListener('change', (e) => {
    changeUser.textContent = e.target.value;
})

*/

let span = wrapper.children[0].children[0]
let spawn = document.querySelector('[data-id="name"]');
console.log(span)
console.log(spawn)


function controladorEvento(){
    const nombre = prompt('¿Cuál es tu nombre?');
    alert(`Hola ${nombre}`)
    span.textContent = nombre
}

// Forma incorrecta de asignar eventos:

//buttonShow.onclick = controladorEvento();   // Si va con paréntesis se lanza automáticamente sin esperar al evento
buttonShow.onclick = controladorEvento;       // Asignar evento
buttonShow.onclick = null;                    // Anular evento
buttonShow.onclick = function(){              // Sobrescribir evento
    //alert('Hola')
}

// Forma CORRECTA de asignar eventos:

buttonShow.addEventListener('click',controladorEvento)

/*  AddEventListener(x,y)
    x = tipo de evento. p.e. 'click'
    Y = función a ejecutar después del evento
*/

