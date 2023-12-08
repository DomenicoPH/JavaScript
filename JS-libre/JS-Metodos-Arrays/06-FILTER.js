//FILTER | retorna otro array
/*
    Filtra un array y retorna otro array con los elementos que coincidan.
*/
const posts = [
    {
        id: 1,
        title: 'Mi primer post',
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
console.log('Incluyen Angular:');
let includesAngular = posts.filter(post => post.tags.includes('angular'))
console.log(includesAngular);

console.log('Incluyen Javascript:');
let includesJS = posts.filter(post => post.tags.includes('javascript'))
console.log(includesJS);

console.log('Impares:');
let imparID = posts.filter(post => post.id % 2 !== 0);
console.log(imparID);

console.log('A. Con imagen:');
let conImagen = posts.filter(post => post.image !== undefined);
console.log(conImagen);

console.log('B. Con imagen:');
let conImagenNEW = posts.filter(post => post?.image);
console.log(conImagen);