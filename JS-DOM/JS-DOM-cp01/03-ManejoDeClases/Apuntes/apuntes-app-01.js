const button = document.querySelector('.button')
const modal = document.querySelector('.modal')
const closeModal = document.querySelector('.modal__close')

// Método .add() para añadir una clase
button.addEventListener('click', function(){
    console.log(modal.classList)
    modal.classList.add('show')
    console.log(modal.classList)
})

// Método .remove() para remover una clase
closeModal.addEventListener('click', function(){
    modal.classList.remove('show')
})

button.addEventListener('click', function(){
    /*
    if(button.matches('red')){
        button.classList.remove('red')
    } else {
        button.classList.add('red')
    }
    */
   // toggle:
   button.classList.toggle('red')
})

// contains()
console.log(modal.classList.contains('modal'))      //true
console.log(button.classList.contains('modal'))     //false
console.log(modal.classList.contains('button'))     //false
console.log(button.classList.contains('button'))    //true

// replace()
console.log(modal.classList)
//modal.classList.replace('modal','inmodal')  //reemplaza la clase 'modal' por 'inmodal'
console.log(modal.classList)

/*
console.log(modal.classList);

// Recorriendo classList usando el index
console.log(modal.classList[0])
console.log(modal.classList[1])
console.log(modal.classList[2])

// Recorriendo classList con método .item(index)
console.log(modal.classList.item(0));
console.log(modal.classList.item(1));
console.log(modal.classList.item(2));
*/