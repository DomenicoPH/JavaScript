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

function controladorEvento(){
    const nombre = prompt('¿Cuál es tu nombre?');
    alert(`Hola ${nombre}`)
}

//buttonShow.onclick = controladorEvento();   // Si va con paréntesis se lanza automáticamente sin esperar al evento
buttonShow.onclick = controladorEvento;
buttonShow.onclick = null;

