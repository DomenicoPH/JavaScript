const wrapper = document.querySelector('[data-id="wrapper"]');
const input = document.querySelector('[type="text"]');
const changeUser = document.querySelector('[data-id="name"]');
const section = document.querySelector('.section')
const buttonShow = document.querySelector('[data-id="button-show"]')
const buttonHide = document.querySelector('[data-id="button-hide"]')

// Eventos
// https://developer.mozilla.org/es/docs/Web/Events

//---------------------------------------------google
const google = document.createElement('a')
google.textContent = 'Google'
google.setAttribute('href', 'https://www.google.com')
google.setAttribute('target', '_blank')
google.style.backgroundColor = 'wheat'
    //console.log(google)
section.appendChild(google)
google.addEventListener('click',(e) => {
    e.preventDefault()  // Con preventDefault prevenimos el comportamiento por defecto.
    if(google.style.backgroundColor === 'wheat') google.style.backgroundColor = 'hotpink'
})
//---------------------------------------------google


//---------------------------------------------show/hide

function showSection(event){
        console.log(event.type)
        console.log(event.target/*.textContent*/)
    wrapper.className = 'show'
};

function hideSection(event){
        console.log(event.type)
        console.log(event.target/*.textContent*/)
    wrapper.className = 'hide'
};

buttonShow.addEventListener('click', showSection)
buttonHide.addEventListener('click', hideSection)

//---------------------------------------------show/hide

input.addEventListener('change',function(e){
    console.dir(e.target.value)
    changeUser.textContent = e.target.value
})

wrapper.addEventListener('click',function(e){
    console.log(e.target)
    colorPoint = e.target
    colorPoint.style.backgroundColor = 'hotpink'
})

//---------------------------------------------form 
const form = input.parentElement
// addEventListener: PREVENIR con preventDefault()
/* form.addEventListener('submit', (e) => {
    e.preventDefault(); // Con preventDefault prevenimos el comportamiento por defecto.
    console.log(`hola ${changeUser.textContent}`)
}) */

// onsubmit: PREVENIR con return false
form.onsubmit = function(){
    console.log('Enviado');
    return false
}