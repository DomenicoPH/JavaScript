/* const wrapper = document.body.childNodes[1]
console.log(wrapper.childNodes)

const comment = document.body.childNodes[3]
console.log(comment)

const commentData = document.body.childNodes[3].data
console.log(commentData)

const docuFirstChild = document.body.firstChild
console.log(docuFirstChild)

const docuFirstElementChild = document.body.firstElementChild
console.log(docuFirstElementChild)

const docuLastChild = document.body.lastChild
console.log(docuLastChild)

const docuLastElementChild = document.body.lastElementChild
console.log(docuLastElementChild)

const ultimoHijo = document.body.children[0]
console.log(ultimoHijo.lastChild)

const ultimoElementoHijo = document.body.children[0]
console.log(ultimoElementoHijo.lastElementChild)

const tieneHijos = document.body.hasChildNodes()
console.log(tieneHijos) */

const wrapper = document.body.children[0];
const div = wrapper.children[1];

console.log(div.nextSibling)