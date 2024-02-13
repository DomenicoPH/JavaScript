// Modificando elementos del DOM --> className, nodeName, innerHTML, outerHTML, textContent

const wrapper = document.querySelector('#wrapper')
const title = document.querySelector('.title')
const link = document.querySelector('.link.bold')
const inputNumber = document.querySelector('[type="number"]')

// En el DOM todos los nodos son objetos que tienen métodos y propiedades:
console.dir(wrapper)
    console.log('ClassName: ', wrapper.className)
    console.log('ClassList: ', wrapper.classList)

console.dir(link)
    console.log('----------------\nPrimer Link\n----------------')
    console.log(link.href)
    console.log(link.innerHTML)
    console.log(link.childNodes)
    console.log(link.children)
    console.log(link.className)

// nodeName
console.log(link.nodeName)
console.log(title.nodeName)
console.log(wrapper.nodeName)
console.log(inputNumber.nodeName)

console.log(' \n---\n ')

console.log(wrapper.childNodes[0].nodeName)
console.log(wrapper.childNodes[1].nodeName)
console.log(wrapper.childNodes[2].nodeName)
console.log(wrapper.childNodes[3].nodeName)
console.log(wrapper.childNodes[4].nodeName)
console.log(wrapper.childNodes[5].nodeName)


// innerHTML --------------------------------------------------------------------------
console.log(wrapper.innerHTML)
//wrapper.innerHTML = `<h2>He sobreescrito el DOM</h2><p>Esta página ha sido completamente borrada.</p>`        //Ingresa código html
//wrapper.innerHTML = `<img src="error" onerror="alert('Todo se pudrió!')"/>`                                   //Ingresa código html + js
//wrapper.innerHTML += `<h2>HTML concatenado</h2>`                                                              //Concatena código html
    
    /* Es una mala práctica usar 'innerHTML' cuando queremos 
       que el usuario ingrese texto ya que se puede ingresar 
       código (brecha de seguridad).
       En estos casos es mejor usar  */


// outerHTML --------------------------------------------------------------------------
console.log(wrapper.outerHTML)
//wrapper.outerHTML = `<h1>Nuevo HTML</h1>`         //Ingresa código html
//wrapper.outerHTML += `<h1>Nuevo HTML</h1>`        //Concatena código html

console.log(wrapper)
const h1 = document.querySelectorAll('h1')
console.log(h1)


// textContent --------------------------------------------------------------------------
console.log(title.textContent)
console.log(wrapper.textContent)

const myLinks = document.querySelectorAll('.link')
    console.log(myLinks[0].textContent)
    console.log(myLinks[1].textContent)
    console.log(myLinks[2].textContent)
    console.log(myLinks[3].textContent)

    myLinks[0].textContent = 'I. Modifica el título'
    myLinks[1].textContent = 'II. Cambia estilos 1'
    myLinks[2].textContent = 'III. Refresh!'
    myLinks[3].textContent = 'IV. Cambia estilos 2'

const textoUsuario = prompt('¿Cómo te llamas?')
title.textContent = `Hola, Bienvenido ${textoUsuario}`



// Funciones:
const div = wrapper.children[1];

// Botón 1
const anchor1 = div.children[0]
anchor1.addEventListener('click', () => {title.textContent = 'título MODIFICADO por hijo 1'})
    // Modifica el título.

// Botón 2
const anchor2 = div.children[1]
anchor2.addEventListener('click', () => {document.documentElement.style.backgroundColor = 'black'; document.documentElement.style.color = 'yellow'})
    // Cambia estilos del 'document -> html' | backgroundColor + Color.

// Botón 3
const anchor3 = div.children[2]
anchor3.addEventListener('click', () => {window.location.reload()})
    // Refresca la página en el navegador.

// Botón 4
const firstLink = myLinks[3]
firstLink.addEventListener('click',() => {
    document.documentElement.style.backgroundColor = 'black'
    document.documentElement.style.color = 'yellow'
    for(let i=0; i < myLinks.length; i++){
        myLinks[i].style.backgroundColor = 'yellow'
        myLinks[i].style.color = 'black'
    }
})