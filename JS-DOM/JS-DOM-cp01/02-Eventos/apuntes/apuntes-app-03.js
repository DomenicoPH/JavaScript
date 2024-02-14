const wrapper = document.querySelector('[data-id="wrapper"]');
const input = document.querySelector('[type="text"]');
const changeUser = document.querySelector('[data-id="name"]');
const section = document.querySelector('.section')
const buttonShow = document.querySelector('[data-id="button-show"]')
const buttonHide = document.querySelector('[data-id="button-hide"]')

// Eventos
// https://developer.mozilla.org/es/docs/Web/Events

function showSection(event){
    console.log(event.type)
    console.log(event.target/*.textContent*/)
    console.log(this)
wrapper.className = 'show'
this.textContent = 'Te muestro'
};

function hideSection(event){
    console.log(event.type)
    console.log(event.target/*.textContent*/)
    console.log(this)
wrapper.className = 'hide'
this.textContent = 'Te oculto'
};

// hideSectionArrow - NO 'this'
const hideSectionArrow = (event) => {
    event.preventDefault();
    wrapper.className = 'hide'
    console.log(this)
} 
//buttonHide.addEventListener('click', hideSectionArrow) // Cuando usamos ArrowFunctions this hace referencia al objeto 'window'

buttonShow.addEventListener('click', showSection)
buttonHide.addEventListener('click', hideSection)

// Remover eventos
buttonShow.removeEventListener('click', showSection)
buttonHide.removeEventListener('click', hideSection)