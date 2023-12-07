//MAP | retorna otro array
/*
    Mapea un array y retorna un nuevo array con todos los elementos
    que coincidan.
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
let titulos = posts.map(post => `Titulo ${post.id}: ` + post.title);
console.log(titulos);

let tags = posts.map(post => `Tags from post 0${post.id}: ` + post.tags)
console.log(tags);

let idTitle = posts.map(post => `${post.id} - ${post.title}`);
console.log(idTitle);