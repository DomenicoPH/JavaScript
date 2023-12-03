// 1. Generar números decimales aleatorios
function generarFraccionAleatorio(){
    return Math.random();
}
console.log(generarFraccionAleatorio());
console.log(generarFraccionAleatorio());
console.log(generarFraccionAleatorio());

// tres decimales aleatorios entre 0 y 0.9999...
var aleatorioDecimal1 = Math.random()
var aleatorioDecimal2 = Math.random()
var aleatorioDecimal3 = Math.random()

// convertidos a tres decmimales aleatorios entre 1.0... y 10.9...
var aleatorioEntero1 = (aleatorioDecimal1 * 10);
var aleatorioEntero2 = (aleatorioDecimal2 * 10);
var aleatorioEntero3 = (aleatorioDecimal3 * 10);

// con ceil -> entero aleatorio del 1 al 10
console.log(Math.ceil(aleatorioEntero1));
console.log(Math.ceil(aleatorioEntero2));
console.log(Math.ceil(aleatorioEntero3));
// con floor -> entero aleatorio del 0 al 9
console.log(Math.floor(aleatorioEntero1));
console.log(Math.floor(aleatorioEntero2));
console.log(Math.floor(aleatorioEntero3));
// con round -> entero aleatorio del 0 al 10
console.log(Math.round(aleatorioEntero1));
console.log(Math.round(aleatorioEntero2));
console.log(Math.round(aleatorioEntero3));


// 2. Generar números enteros aleatorios
var numeroAleatorioEntre0y19 = Math.floor(Math.random() * 20);
    console.log('Entre 0 y 19:',numeroAleatorioEntre0y19);

var numeroAleatorioEntre0y20 = Math.floor(Math.random() * 21);
    console.log('Entre 0 y 20:',numeroAleatorioEntre0y20);


// 3. Generar números enteros aleatorios
function generarEnteroAleatorio(limit){
    return Math.floor(Math.random() * limit)
}
console.log(generarEnteroAleatorio(5));
console.log(generarEnteroAleatorio(500));
console.log(generarEnteroAleatorio(5000));


    // Esta función retorna un arreglo con 5 numeros aleatorios del 0 al número que se le indique como límite en el valor de parámetro.
    function generaEnteroAleatorioConFor(limit){
        let aleatorios = []
        for(var i=0; i < 5; i++){
            aleatorios.push(generarEnteroAleatorio(limit))
        }
        return aleatorios;
    }

    console.log('5 números aleatorios del 0 al 5',generaEnteroAleatorioConFor(5))
    console.log('5 números aleatorios del 0 al 50',generaEnteroAleatorioConFor(50))
    console.log('5 números aleatorios del 0 al 500',generaEnteroAleatorioConFor(500))
    console.log('5 números aleatorios del 0 al 5000',generaEnteroAleatorioConFor(5000))


// 4. Números enteros aleatorios en un rango
function rangoAleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}
console.log('Entre 1 y 10:',rangoAleatorio(1,10));
console.log('Entre 1 y 10:',rangoAleatorio(1,10));
console.log('Entre 100 y 180:',rangoAleatorio(100,180));
console.log('Entre 100 y 180:',rangoAleatorio(100,180));

let aleatoriosX20 = []
for(let i=0; i < 20; i++){
    aleatoriosX20.push(rangoAleatorio(0,1))
}
console.log(JSON.stringify(aleatoriosX20));
console.log(JSON.stringify(aleatoriosX20));
console.log(JSON.stringify(aleatoriosX20));


// Función: Binarios
function binaryGroups(){
    let random20 = [];
    let unos = [];
    let ceros = [];
    for(let i=0; i < 20; i++){
        random20.push(rangoAleatorio(0,1))
    }
    //console.log(random20);
    for(let i=0; i < random20.length; i++){
        if(random20[i] === 1) unos.push(random20[i]);
        if(random20[i] === 0) ceros.push(random20[i]);
    }
    return JSON.stringify([
        {
            unos: unos,
            cantidad: unos.length
        },
        {
            ceros: ceros,
            cantidad: ceros.length
        }
    ])
}
console.log(binaryGroups());
console.log(binaryGroups());
console.log(binaryGroups());

/*  Métodos utilizados:
    Math.random()   | Genera un número decimal aleatorio entre 0 y 0.999...
    Math.round()    | Redondea un decimal hacia su entero más próximo (0.7 -> 1 | 4.3 -> 4)
    Math.ceil()     | Redondea un decimal hacia su entero inmediato superior (5.1 -> 6)
    Math.floor()    | Redondea un decimal hacia su entero inmediato inferior (5.9 -> 5)
*/