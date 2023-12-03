// Objetos

// 1. Sintaxis de un objeto en JS
// --> La información del objeto se almacena en pares 'key / value'
var miPerro = {
    nombre: 'Gia',
    edad: 6,
    peso: 20,
    raza: 'Mixto Beagle/Salchicha'
}

// 2. Acceder a las propiedades de un objeto con notación de punto
console.log(miPerro.nombre);
console.log(miPerro.edad);
console.log(miPerro.peso);
console.log(miPerro.raza);


// 3. Acceder a las propiedades de un objeto con notación de corchete
console.log('--- mi cuaderno ---');
var miCuaderno = {
    'color': 'verde',
    'categoria': 3,
    'numero de paginas': 200,
    'numero de hojas': 100
};
console.log(miCuaderno.color);
console.log(miCuaderno.categoria);
console.log(miCuaderno['numero de paginas']);
console.log(miCuaderno['numero de hojas']);
//también puede utilizarse con propiedades q usan una sola palabra:
console.log(miCuaderno['color']);
console.log(miCuaderno['categoria']);

// Para simplificar y poder utilizar la notación de punto se pueden definir las propiedades del objeto sin espacios y usando camelcase:
console.log('--- mi Nuevo cuaderno ---');
var miNuevoCuaderno = {
    color: 'rojo',
    categoria: 4,
    numeroDePaginas: 200,
    numeroDeHojas: 100
};
console.log(miNuevoCuaderno.color);
console.log(miNuevoCuaderno.categoria);
console.log(miNuevoCuaderno.numeroDePaginas);
console.log(miNuevoCuaderno.numeroDeHojas);


// 4. Acceder a las propiedades : Variables
var resultados = {
    1: 'Kintaro',
    2: 'Goro',
    3: 'Motaro',
    4: 'Sheeva'
};

var primero = 1;
var ultimo = 4;

console.log('Ganador: ',resultados[primero]);
console.log('Perdedor: ',resultados[ultimo]);

// 5. Actualizar propiedades
var mochila = {
    color: 'azul',
    tamaño: 'mediano',
    contenido: ['botella de agua', 'cuaderno']
};
console.log('Mochila AZUL', JSON.stringify(mochila));
//acceder al valor ->
console.log(mochila.color);
console.log(mochila.tamaño);
console.log(mochila.contenido);
console.log('---------------------------------');
//modificar valores ->
mochila.color = 'amarillo';
console.log(mochila.color);
mochila.tamaño = 'grande'
console.log(mochila.tamaño);
//añadir contenido ->
mochila.contenido.push('celular')
console.log(mochila.contenido);
console.log(mochila.contenido[2]);
console.log('Mochila AMARILLA', JSON.stringify(mochila));

// 6. Agregar propiedades
var curso = {
    titulo: 'Aprende JavaScript desde cero',
    idioma: 'Español',
    duracion: 30
};
console.log(curso.titulo);
console.log(curso.idioma);
console.log(curso.duracion);
//añadir propiedad 'vistas' con un valor determinado
curso.vistas = 3500;
console.log(curso.vistas);
console.log(curso['vistas']);
console.log(JSON.stringify(curso));

// 7. Eliminar propiedades
delete curso.duracion;
delete curso.vistas;
console.log(curso);

// 8. Objetos para búsquedas

// Fución que utiliza una sentencia Switch
function buscarElementoQuimicoSwitch(simbolo){
    var elemento = '';
    switch(simbolo){
        case 'Al':
            elemento = 'Aluminio';
            break;
        case 'S':
            elemento = 'Azufre';
            break;
        case 'Cl':
            elemento = 'Cloro';
            break;
        case 'He':
            elemento = 'Helio';
            break;
        case 'B':
            elemento = 'Boro';
            break;
        case 'Li':
            elemento = 'Litio';
            break;
    }
    return elemento;
};
console.log('-- Elementos Químicos - Switch --');
console.log(buscarElementoQuimicoSwitch('Al'));
console.log(buscarElementoQuimicoSwitch('S')) ;
console.log(buscarElementoQuimicoSwitch('Cl'));
console.log(buscarElementoQuimicoSwitch('He'));
console.log(buscarElementoQuimicoSwitch('B')) ;
console.log(buscarElementoQuimicoSwitch('Li'));

// Fución que utiliza una sentencia Switch
function buscarElementoQuimicoObj(elemento){
    var elementos = {
        Al: 'Aluminio',
        S: 'Azufre',
        Cl: 'Cloro',
        He: 'Helio',
        B: 'Boro',
        Li: 'Litio'
    }
    return elementos[elemento];
}
console.log('-- Elementos Químicos - Objeto --');
console.log(buscarElementoQuimicoObj('Al'));
console.log(buscarElementoQuimicoObj('S')) ;
console.log(buscarElementoQuimicoObj('Cl'));
console.log(buscarElementoQuimicoObj('He'));
console.log(buscarElementoQuimicoObj('B')) ;
console.log(buscarElementoQuimicoObj('Li'));

// 9. Verificar propiedades (método hasOwnProperty)
var miOtroCuaderno = {
    color: 'verde',
    categoria: 3,
    precio: 4.56
};
console.log(miOtroCuaderno.hasOwnProperty("color"));
console.log(miOtroCuaderno.hasOwnProperty("categoria"));
console.log(miOtroCuaderno.hasOwnProperty('numero de paginas'));
console.log(miOtroCuaderno.hasOwnProperty('numero de hojas'));
console.log(miOtroCuaderno.hasOwnProperty('precio'));

// Función que verifica si un objeto tiene una determinada propiedad
function verificarProp(obj,prop){
    if(obj.hasOwnProperty(prop)){
        return `Propiedad: ${prop}: ${obj[prop]}`
    } else {
        return `El objeto no tiene la propiedad ${prop}`
    }
}
//verificaremos propiedades en 
console.log(JSON.stringify(miCuaderno));
console.log(JSON.stringify(miNuevoCuaderno));
console.log(JSON.stringify(miOtroCuaderno));

console.log(`Testing 'miCuaderno'`);
console.log(verificarProp(miCuaderno, 'numero de paginas'));
console.log(verificarProp(miCuaderno, 'numero de hojas'));
console.log(verificarProp(miCuaderno, 'color'));
console.log(verificarProp(miCuaderno, 'categoria'));
console.log(verificarProp(miCuaderno, 'precio'));

console.log(`Testing 'miNuevoCuaderno'`);
console.log(verificarProp(miNuevoCuaderno, 'numero de paginas'));
console.log(verificarProp(miNuevoCuaderno, 'numero de hojas'));
console.log(verificarProp(miNuevoCuaderno, 'color'));
console.log(verificarProp(miNuevoCuaderno, 'categoria'));
console.log(verificarProp(miNuevoCuaderno, 'precio'));

console.log(`Testing 'miOtroCuaderno'`);
console.log(verificarProp(miOtroCuaderno, 'numero de paginas'));
console.log(verificarProp(miOtroCuaderno, 'numero de hojas'));
console.log(verificarProp(miOtroCuaderno, 'color'));
console.log(verificarProp(miOtroCuaderno, 'categoria'));
console.log(verificarProp(miOtroCuaderno, 'precio'));