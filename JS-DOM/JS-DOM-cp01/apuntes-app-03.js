const wrapper = document.querySelector('#wrapper')
const title = document.querySelector('.title')
const link = document.querySelector('.link.bold')
const inputNumber = document.querySelector('[type="number"]')


// getAttribute

console.dir(title)
console.dir(inputNumber)

console.dir(title.getAttribute('href'))
console.dir(link.getAttribute('href'))
console.dir(inputNumber.getAttribute('name'))
console.dir(inputNumber.getAttribute('type'))
console.dir(inputNumber.getAttribute('id'))
console.dir(wrapper.getAttribute('class'))
console.dir(wrapper.getAttribute('id'))
console.dir(link.getAttribute('class'))

// setAttribute

console.log('-- class -- pepito --')
//console.log(title.className)
//console.log(title.className = 'pepito')
//console.log(title.className)
console.dir(title.className)
title.setAttribute('class','pepito')
console.dir(title.className)

console.log('-- id -- encabezado --')
//console.log(title.id)
//console.dir(title.id = 'encabezado')
//console.log(title.id)
console.dir(title.id)
title.setAttribute('id','encabezado')
console.dir(title.id)

console.log('\/ links: ')
const link1 = wrapper.children[1].children[0]
const link2 = wrapper.children[1].children[1]
const link3 = wrapper.children[1].children[2]
const link4 = wrapper.children[2]
console.log(link1)
console.log(link2)
console.log(link3)
console.log(link4)

link1.setAttribute('src','www.google.com')
link2.setAttribute('src','www.instagram.com')
link1.setAttribute('href','https://www.google.com')
link2.setAttribute('href','https://www.instagram.com')

//const img = document.querySelector('img')   // Imagen(!)
const img = document.querySelector('[data-identificador="img"]')
img.src = 'https://es.web.img2.acsta.net/pictures/23/09/28/16/30/5906778.jpg'   //SET propiedad 'src':'...link...'
img.setAttribute('alt','el nuevo vengador toxico')      //SET propiedad 'alt':'el nuevo vengador toxico'
console.log(img)


// hasAttribute
console.log(img.hasAttribute('alt'))        //tiene prop 'alt'? TRUE
console.log(img.hasAttribute('name'))       //tiene prop 'name'? FALSE


// removeAttribute
img.setAttribute('class','image')               //SET propiedad 'class':'image'
img.setAttribute('id','mainImage')              //SET propiedad 'id':'mainImage'
img.setAttribute('name','toxic-image')          //SET propiedad 'name':'toxic-image'
img.removeAttribute('id')                       //REMOVE propiedad 'id'
img.removeAttribute('class')                    //REMOVE propiedad 'class'
img.removeAttribute('alt')                      //REMOVE propiedad 'alt'
console.log(img)
console.log(img.hasAttribute('alt'))        //tiene prop 'alt'? FALSE
console.log(img.hasAttribute('name'))       //tiene prop 'name'? TRUE


//attributes
console.log(img.attributes)
console.log(img.attributes[0])
console.log(img.attributes[1])


// * atributos personalizados
const figcaption = document.querySelector('figcaption')
const textoMostrar = img.getAttribute('data-texto-mostrar')
figcaption.textContent = textoMostrar

console.log(img.dataset)
figcaption.textContent = img.dataset.textoMostrar