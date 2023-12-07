//INCLUDES | retorna true/false
/*
    Busca una coincidencia retornando true o false en base a los resultados
    de la búsqueda. Retorna true si encuentra coincidencia en al menos uno de
    los elementos.
*/
const posts = [
    {
        id: 1,
        title: 'Mi primer post',
        image: 'https://img.com/1',
        tags: ['javascript', 'webdevelopment']
    },{
        id: 2,
        title: 'Mi experiencia con React',
        image: 'https://img.com/2',
        tags: ['javascript', 'webdevelopment', 'react']
    },{
        id: 3,
        title: 'Por qué dejé Angular',
        image: 'https://img.com/3',
        tags: ['javascript', 'webdevelopment', 'angular']
    }
];

// test: comprueba si hay alguno
let post1IncludesReact = posts.some(post => post.tags.includes('react'))
console.log(post1IncludesReact);

//Asignamos cada post a una variable distinta utilizando su id.
let post1 = posts.find(post => post.id === 1)
let post2 = posts.find(post => post.id === 2)
let post3 = posts.find(post => post.id === 3)

//Verifica si el array tags de cada post tiene los siguientes elementos:
console.log(post1.tags.includes('javascript'));
console.log(post2.tags.includes('javascript'));
console.log(post3.tags.includes('javascript'));

console.log(post1.tags.includes('angular'));
console.log(post2.tags.includes('angular'));
console.log(post3.tags.includes('angular'));

//Verifica si el array posts tiene los siguientes elementos:
console.log(posts.includes(posts[0]))
console.log(posts.includes(posts[1]))
console.log(posts.includes(posts[2]))
console.log(posts.includes(posts[3]))