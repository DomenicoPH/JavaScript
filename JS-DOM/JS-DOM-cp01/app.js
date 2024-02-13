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