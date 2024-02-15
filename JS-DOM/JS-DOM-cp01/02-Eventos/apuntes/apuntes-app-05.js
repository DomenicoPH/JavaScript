const wrapper = document.querySelector('[data-id="wrapper"]');
const input = document.querySelector('[type="text"]');
const changeUser = document.querySelector('[data-id="name"]');
const section = document.querySelector('.section')
const buttonShow = document.querySelector('[data-id="button-show"]')
const buttonHide = document.querySelector('[data-id="button-hide"]')

// Fase de bubbling y fase de captura:

function handleEvent(e){
    console.log(`Has dado click en ${e.currentTarget.nodeName}`);
}

// Fase de bubbling
//buttonShow.addEventListener('click', handleEvent);
//section.addEventListener('click', handleEvent);
//document.body.addEventListener('click', handleEvent);

// Fase de captura
buttonShow.addEventListener('click', handleEvent, {capture: true});
section.addEventListener('click', handleEvent, {capture: true});
document.body.addEventListener('click', handleEvent, {capture: true});
