//EVERY | retorna true/false
/*
    Busca una coincidencia retornando true o false en base a los resultados
    de la búsqueda. Retorna true si encuentra coincidencia en todos los elementos.
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

// test: comprueba si se cumple en todas
let isReactInEVERYpost = posts.every(post => post.tags.includes('react'))
console.log(isReactInEVERYpost);

let isJSinEVERYpost = posts.every(post => post.tags.includes('javascript'))
console.log(isJSinEVERYpost);