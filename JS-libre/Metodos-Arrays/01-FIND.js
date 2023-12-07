//FIND | retorna un objeto
/*
    Recorre todo el array y busca una coincidencia. Retorna el elemento (objeto)
    que corresponde a la coincidencia. Si no encuentra coincidencia retorna undefined.
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
let title01 = posts.find(post => post.title === 'Mi primer post');
    console.log(title01);
let undefined = console.log(posts.find(post => post.id === 4));
    console.log(undefined)

let post1 = posts.find(post => post.id === 1)
console.log(post1);
    console.log(post1.title)
    console.log(post1.image);
    console.log(post1.tags);
    console.log(post1.tags[0]);
    console.log(post1.tags[1]);

let post2 = posts.find(post => post.id === 2)
console.log(post2);
    console.log(post2.title)

let post3 = posts.find(post => post.id === 3)
console.log(post2);
    console.log(post3.title)


