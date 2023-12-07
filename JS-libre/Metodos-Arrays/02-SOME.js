//SOME | retorna true/false
/*
    Busca una coincidencia retornando true o false en base a los resultados
    de la búsqueda.
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

// test
let postONE = posts.some(post => post.id === 1);    // existe
let postTWO = posts.some(post => post.id === 2);    // existe
let postSIX = posts.some(post => post.id === 6);    // no existe

console.log(postONE);
console.log(postTWO);
console.log(postSIX);