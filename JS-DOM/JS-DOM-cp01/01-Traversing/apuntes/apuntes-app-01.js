/* DOM - Apuntes */

// PART I

// childNodes -> Nodos hijos

const bodyContent = document.body.childNodes    // Nodos hijos del elemento 'body' (RETORNA TODOS LOS NODOS)
console.log('CHILDNODES: ', bodyContent)

const divWrapper = bodyContent[1]    // Índice [1] de los nodos hijos de 'body' -> div.wrapper
console.log(divWrapper)

console.log(divWrapper.childNodes)              // Hijos de div.wrapper
    const titulo = divWrapper.childNodes[1]
    console.log(titulo)                         // Índice [1] de los hijos de div.wrapper -> título
    const form = divWrapper.childNodes[7]
    console.log(form)                           // Índice [7] de los hijos de div.wrapper -> form


// comments
const comment = bodyContent[3]     // Índice [3] de los nodos hijos de 'body' -> comment
console.log(comment)
const commentData = bodyContent[3].data     // propiedad .data del elemento 'comment'
console.log(commentData)


// children | firstChild | firstElementChild | lastChild | lastElementChild

console.log('CHILDREN: ', document.body.children)

const docuFirstChild = document.body.firstChild     // primer hijo del documento (en este caso #text hace referencia al espacio antes del div.wrapper)
console.log(docuFirstChild)

const docuFirstElementChild = document.body.firstElementChild   // primer ELEMENTO hijo del documento (en este caso #text no es un elemento; pasa al siguiente: div.wrapper)
console.log(docuFirstElementChild)

const docuLastChild = document.body.lastChild   // último hijo del documento (en este aso <script>)
console.log(docuLastChild)

const docuLastElementChild = document.body.lastElementChild     // último ELEMENTO hijo del documento (en este aso <script>)
console.log(docuLastElementChild)

/*  Diferencia entre 'childNodes' y 'children'

    - childNodes - Esta propiedad devuelve una NodeList que contiene todos los nodos secundarios del elemento, 
    incluidos los nodos de texto y los nodos de comentario, además de los elementos HTML. Esto significa que 
    childNodes incluye todos los tipos de nodos secundarios del elemento, no solo los elementos HTML.
    Por ejemplo, si tenemos un elemento <div> con varios elementos secundarios y texto entre ellos, childNodes 
    devolverá una lista que incluye todos los nodos secundarios, incluidos los elementos y los nodos de texto.

    - children - Esta propiedad devuelve una colección HTMLCollection que contiene solo los elementos secundarios 
    del elemento, excluyendo los nodos de texto y los nodos de comentario. En otras palabras, children devuelve 
    solo los elementos HTML secundarios directos del elemento, sin incluir ningún otro tipo de nodo.
    Por lo tanto, si tenemos el mismo elemento <div> con elementos secundarios y texto entre ellos, children 
    devolverá solo los elementos secundarios, omitiendo cualquier nodo de texto o de comentario.

    * La diferencia principal entre childNodes y children es que childNodes incluye todos los tipos de nodos 
      secundarios del elemento, mientras que children incluye solo los elementos HTML secundarios directos.
*/

// children: retorna únicamente los 'ELEMENTOS' hijos (en este caso hijos de document.body)

const primerElemento = document.body.children[0]    // children en el índice [0] retornará el primer hijo de tipo elemento
console.log('Primer ELEMENTO de body: ', primerElemento)

    console.log(primerElemento.lastChild)           // Muestra el último hijo (  #text  ) del primer elemento (div.wrapper)
    console.log(primerElemento.lastElementChild)    // Muestra el último ELEMENTO hijo (  form  ) del primer elemento (div.wrapper)
    console.log(primerElemento.firstChild)          // Muestra el primer hijo (  #text  ) del primer elemento (div.wrapper)
    console.log(primerElemento.firstElementChild)   // Muestra el primer ELEMENTO hijo (  h1.title  ) del primer elemento (div.wrapper)

const tieneHijos = document.body.hasChildNodes()
const noTieneHijos = primerElemento.firstChild.hasChildNodes()

console.log(tieneHijos)                             // TRUE -> ( document.body ) tiene hijos
console.log(noTieneHijos)                           // FALSE -> ( primerElemento.firstChild ) no tiene hijos


// nextSibling | nextElementSibling | previousSibling | previousElementSibling

const wrapper = document.body.children[0];      // wrapper = div.wrapper
console.log(wrapper)
console.log(wrapper.children[0])                // <h1.title>
const div = wrapper.children[1];                // <div>
console.log(div)

console.log('nextSibling: ')
console.log(div.nextSibling)    // Siguiente nodo de <div> --> #text
console.log(div.nextSibling.nextSibling)    // Siguiente nodo de #text --> a.link
console.log(div.nextSibling.nextSibling.nextSibling)    // Siguiente nodo de a.link --> #text
console.log(div.nextSibling.nextSibling.nextSibling.nextSibling)    // Siguiente nodo de #text --> <form>

console.log('nextElementSibling: ')
console.log(div.nextElementSibling)     // Siguiente ELEMENTO de <div> --> a.link
console.log(div.nextElementSibling.nextElementSibling)      // Siguiente ELEMENTO de a.link --> <form>

console.log('previousSibling: ')
console.log(div.previousSibling)    // nodo previo de <div> --> #text

console.log('previousElementSibling: ')
console.log(div.previousElementSibling)     // ELEMENTO previo de <div> --> h1.class


// Cambio de título:
const h1 = div.previousElementSibling
h1.textContent = 'MOD (Modelo de Objeto: Documento)'
console.log(h1)

// Event Listener:
const anchor1 = div.children[0]
anchor1.addEventListener('click', () => {h1.textContent = 'título MODIFICADO por hijo 1'})
    // Modifica el título.

const anchor2 = div.children[1]
anchor2.addEventListener('click', () => {document.documentElement.style.backgroundColor = 'black'; document.documentElement.style.color = 'yellow'})
    // Cambia estilos del 'document -> html' | backgroundColor + Color.

const anchor3 = div.children[2]
anchor3.addEventListener('click', () => {window.location.reload()})
    // Refresca la página en el navegador.


// parentNode
console.log('parentNode: ')
console.log(anchor1.parentNode)                                             // El padre de 'anchor1' es: ---> div
console.log(anchor1.parentNode.parentNode)                                   // El padre de 'div' es: ---> div#wrapper.wrapper
console.log(anchor1.parentNode.parentNode.parentNode)                         // El padre de 'div#wrapper.wrapper' es: ---> body
console.log(anchor1.parentNode.parentNode.parentNode.parentNode)               // El padre de body es: ---> html
console.log(anchor1.parentNode.parentNode.parentNode.parentNode.parentNode)     // El padre de html es: ---> document

console.log(anchor1.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode)  // null -> document es la raíz  

// parentElement
console.log('parentElement: ')
console.log(anchor1.parentElement)                                          // El ELEMENTO padre de 'anchor1' es: ---> div
console.log(anchor1.parentElement.parentElement)                             // El ELEMENTO padre de 'div' es: ---> div#wrapper.wrapper
console.log(anchor1.parentElement.parentElement.parentElement)                // El ELEMENTO padre de 'div#wrapper.wrapper' es: ---> body
console.log(anchor1.parentElement.parentElement.parentElement.parentElement)   // El ELEMENTO padre de body es: ---> html

console.log(anchor1.parentElement.parentElement.parentElement.parentElement.parentElement)  // El ELEMENTO padre de html es: ---> null (Porque el objeto document es un nodo de tipo 'document', no 'ELEMENTO')

// PART II

// getElementById
const wrapperDemo1 = document.getElementById('wrapper')
console.log(wrapperDemo1)

// getElementsByClassName
const links = document.getElementsByClassName('link')
console.log(links)

// getElementsByTagName
const divs = document.getElementsByTagName('div')
const anchors = document.getElementsByTagName('a')
const parrafos = document.getElementsByTagName('p')

console.log('divs: ',divs)
console.log('anchors: ',anchors)
console.log('párrafos: ',parrafos)

// getElementsByName (Únicamente se puede usar en el nodo raíz = document)
const input = document.getElementsByName('telefono')
console.log(input)


const firstLink = links[3]
firstLink.addEventListener('click',() => {
    document.documentElement.style.backgroundColor = 'black'
    document.documentElement.style.color = 'yellow'
    for(let i=0; i < links.length; i++){
        links[i].style.backgroundColor = 'yellow'
        links[i].style.color = 'black'
    }
})


// querySelector
console.log('\n querySelector: ')

const myWrapper = document.querySelector('#wrapper')      // Retorna el primer elemento que coincida con --> id: wrapper
console.log(myWrapper)
const linkBold = myWrapper.querySelector('.link.bold')            // Retorna el primer elemento que coincida con --> class: link && class: bold (dentro de 'wrapper')
const lastLink = myWrapper.querySelector('.link:last-of-type')    // Retorna el ultimo enlace del grupo
    console.log(linkBold)
    console.log(lastLink)

// querySelectorAll
const myLinks = document.querySelectorAll('.link')         // Retorna el primer elemento que coincida con --> class: link
console.log(myLinks)
console.log(myLinks[0])
console.log(myLinks[1])
console.log(myLinks[2])
console.log(myLinks[3])
const myDivs = document.querySelectorAll('div')            // Retorna el primer elemento que coincida con --> tagName: div
console.log(myDivs)
console.log(myDivs[0])
console.log(myDivs[1])

// Listas de Nodos y colecciones HTML...
const linksHTML = document.getElementsByClassName('link')
const linksNode = document.querySelectorAll('.link')

console.log('LISTAS I')
console.log(linksHTML)  // x4
console.log(linksNode)  // x4

const tagAnchor = document.createElement('a')
tagAnchor.setAttribute('class','link')
tagAnchor.textContent = 'Hola Mundo'
document.body.append(tagAnchor)

console.log('LISTAS II')
console.log(linksHTML)  // x5
console.log(linksNode)  // x4

// Las listas de Nodos se pueden recorrer con forEach (las 'colecciones html' no)
// Las listas de Nodos no son objetos vivos (no se actualizan, las 'colecciones html' en cambio si)
console.log('linksNode con forEach()')
linksNode.forEach(link => console.log(link))

//Las 'collecciones html' se pueden recorrer con el método 'item'
console.log('Colecciones HTML: método item()')
console.log(linksHTML.item(0))
console.log(linksHTML.item(1))
console.log(linksHTML.item(2))
console.log(linksHTML.item(3))

//Convertir lista de nodos en un Array
const newLinksNode = Array.from(document.querySelectorAll('.link'))
console.log(newLinksNode)