// DOM I
const wrapper = document.body.children[1]
const title = document.body.children[1].children[0]
const links = Array.from(document.querySelectorAll('.link'))
const link1 = links[0]
const link2 = links[1]
const link3 = links[2]
const link4 = links[3]

//console.log(wrapper); console.log(title); console.log(links); console.log(link1); console.log(link2); console.log(link3); console.log(link4)
wrapper.setAttribute('style', 'display:flex; flex-direction:column; align-items:center')
for(let i=0; i < links.length; i++){
    console.log(links[i])
    links[i].setAttribute('style','min-width:200px; display:flex; justify-content:center')
}
link1.textContent = 'Oscuro'
link1.setAttribute('class','link')
link2.textContent = 'Grises'
link3.textContent = 'Colour'
link4.textContent = 'Normal'

link1.addEventListener('click',() => {
    document.documentElement.style.backgroundColor = 'black'
    document.documentElement.style.color = 'yellow'
    for(let i=0; i < links.length; i++){
        links[i].style.backgroundColor = 'yellow'
        links[i].style.color = 'black'
    }
    title.textContent = 'DOM (Document Object Model) - Modo oscuro'
})

link2.addEventListener('click',() => {
    document.documentElement.style.backgroundColor = 'black'
    document.documentElement.style.color = 'gray'
    for(let i=0; i < links.length; i++){
        links[i].style.backgroundColor = 'gray'
        links[i].style.color = 'black'
    }
    title.textContent = 'DOM (Document Object Model) - Modo gris'
})

link3.addEventListener('click',() => {
    document.documentElement.style.backgroundColor = 'orange'
    document.documentElement.style.color = 'green'
        links[0].style.backgroundColor = 'black'
        links[0].style.color = 'yellow'
        links[1].style.backgroundColor = 'gray'
        links[1].style.color = 'black'
        links[2].style.backgroundColor = 'blue'
        links[2].style.color = 'orange'
        links[3].style.backgroundColor = 'rebeccapurple'
        links[3].style.color = 'white'
        title.textContent = 'DOM (Document Object Model) - Full-Color-Mode'
})

link4.addEventListener('click',() => {
    document.documentElement.style.backgroundColor = 'white'
    document.documentElement.style.color = 'rebeccapurple'
        for(let i=0; i < links.length; i++){
            links[i].style.backgroundColor = 'rebeccapurple'
            links[i].style.color = 'white'
        }
        title.textContent = 'DOM (Document Object Model)'
})