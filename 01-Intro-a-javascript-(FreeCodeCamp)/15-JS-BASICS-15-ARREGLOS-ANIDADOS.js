// Arreglos anidados

var misPlantas = [
    {
        tipo: 'flores',
        lista: [
            'rosas',
            'tulipanes',
            'dientes de león'
        ]
    },
    {
        tipo: 'árboles',
        lista: [
            'abeto',
            'pino',
            'abedul'
        ]
    }
];

console.log(misPlantas[0])
console.log(misPlantas[1])

var primeraFlor = misPlantas[0].lista[0];
var segundaFlor = misPlantas[0].lista[1];
var terceraFlor = misPlantas[0].lista[2];
console.log(primeraFlor);
console.log(segundaFlor);
console.log(terceraFlor);

var primerArbol = misPlantas[1].lista[0];
var segundoArbol = misPlantas[1].lista[1];
var tercerArbol = misPlantas[1].lista[2];
console.log(primerArbol);
console.log(segundoArbol);
console.log(tercerArbol);

// Agrupar en pares:
var par1 = [primeraFlor, primerArbol];
var par2 = [segundaFlor, segundoArbol];
var par3 = [terceraFlor, tercerArbol];
console.log({
    'Primer par': par1,
    'Segundo par': par2,
    'tercer par': par3
});


/*  Ejercicio: - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - >
    Colección de discos | Tenemos un objeto que representa parte de una colección
    de albumes musicales. | Cada album tiene un numero de identificación único (id)
    asociado a otras propiedades. | No todos los albumes tienen la información completa.}
*/

var coleccionDeDiscos = {
    7853: {
        tituloDelAlbum: 'Bee Gees Greatest',
        artista: 'Bee Gees',
        canciones: ['Stayin Alive']
    },
    5439: {
        tituloDelAlbum: 'ABBA Gold'
    }
};

/*
    Define una función actualizarDiscos que tome los siguientes parámetros:
    - discos (el objeto que representa la colección de discos)
    - id
    - propiedad ('artista' o 'canciones')
    - valor
    -----------------------------------------------------------------------
    La meta es completar la función implementando las siguientes reglas para modificar
    el objeto pasado a la función.
        - Si 'valor' es una cadena vacia, elimina la propiedad del album correspondiente.
        - Si 'propiedad' es igual a la cadena de caracteres 'canciones' pero el album no tiene
            una propiedad llamada 'canciones', crea un arreglo vacio y agrega 'valor' a ese
            arreglo.
        - Si 'propiedad' es igual a la cadena de caracteres 'canciones' y 'valor' no es una 
            cadena vacia, arregla 'valor' al final del arrglo de canciones del album
            correspondiente.
        - Si 'valor' no es una cadena vacia y 'propiedad' no es igual a 'canciones', asigna
            el valor del parámetro 'valor' a la propiedad. Si la propiedad no existe, debes 
            crearla y asignar este valor.
*/

function actualizarDiscos(discos,id,propiedad,valor){
    if(valor === '') {delete discos[id][propiedad]}
    if(propiedad === 'canciones') {
        discos[id][propiedad] = discos[id][propiedad] || [];
        discos[id][propiedad].push(valor);
    }
    if(valor !== '' && propiedad !== 'canciones'){
        discos[id][propiedad] = valor
    }
};

console.log(coleccionDeDiscos[7853].tituloDelAlbum);
actualizarDiscos(coleccionDeDiscos,7853,'tituloDelAlbum','')
console.log(coleccionDeDiscos[7853].tituloDelAlbum);
actualizarDiscos(coleccionDeDiscos,7853,'tituloDelAlbum','Hola Juanito - El musical')
console.log(coleccionDeDiscos[7853].tituloDelAlbum);

actualizarDiscos(coleccionDeDiscos,[5439],'artista','ABBA')
actualizarDiscos(coleccionDeDiscos,[5439],'canciones','ABBA face')
console.log(coleccionDeDiscos[5439]);

console.log(coleccionDeDiscos);