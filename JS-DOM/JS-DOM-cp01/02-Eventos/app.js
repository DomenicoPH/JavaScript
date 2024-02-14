const wrapper = document.querySelector('[data-id="wrapper"]');
const input = document.querySelector('[type="text"]');
const changeUser = document.querySelector('[data-id="name"]');
const section = document.querySelector('.section')
const buttonShow = document.querySelector('[data-id="button-show"]')
const buttonHide = document.querySelector('[data-id="button-hide"]')

function handleEvent(e){
    console.log(`Has dado click en ${e.currentTarget.nodeName}`);
}

buttonShow.addEventListener('click', handleEvent)
section.addEventListener('click', handleEvent);
document.body.addEventListener('click', handleEvent);