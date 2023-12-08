//REDUCE | retorna otro array
/*
    Recibe dos parámetros: acumulador, elemento
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

// test | tags
let allTags = posts.reduce((tags, post) => {
    return [...tags, ...post.tags]
},[]);  // Todos los Tags (no omite repetidos)
console.log(allTags);

let allTagsNoRepeat = posts.reduce((tags,post) => {
    return Array.from(new Set([...tags, ...post.tags]))
},[]);  // Set no admite repetidos
console.log(allTagsNoRepeat);

let allTagsFiltered = posts.reduce((tags,post) => {
    return [...tags, ...post.tags]
},[]).filter((post, index, self) => index === self.indexOf(post))

// test | titles
let allTitles = posts.reduce((titles, post) => {
    return [...titles, post.title]
},[])
console.log(allTitles);
console.log(allTitles[0]);
console.log(allTitles[1]);
console.log(allTitles[2]);