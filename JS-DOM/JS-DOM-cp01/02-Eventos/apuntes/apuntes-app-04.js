const wrapper = document.querySelector('[data-id="wrapper"]');
const input = document.querySelector('[type="text"]');
const changeUser = document.querySelector('[data-id="name"]');
const section = document.querySelector('.section')
const buttonShow = document.querySelector('[data-id="button-show"]')
const buttonHide = document.querySelector('[data-id="button-hide"]')

// Propagación de eventos:

function handleEvent(e){
    console.log(`currentTarget : Has dado click en ${e.currentTarget.nodeName}`)    // Siempre muestra 'click en BODY'
    //console.log(`target : Has dado click en ${e.target.nodeName}`)                  // Varía según en qué elemento haga click
}

function handleEventStop(e){
    //e.stopPropagation()
    e.stopImmediatePropagation()
    console.log(`currentTarget : Has dado click en ${e.currentTarget.nodeName}`)
}


buttonShow.addEventListener('click',handleEvent)
//for stopPropagation()
section.addEventListener('click', handleEventStop);
//for stopImmediatePropagation()
section.addEventListener('click', () => {       //con 'stopImmediatePropagation' en 'handleEventStop' esta función no se ejecuta (!)
    alert('Hola mundo')
})
document.body.addEventListener('click', handleEvent);