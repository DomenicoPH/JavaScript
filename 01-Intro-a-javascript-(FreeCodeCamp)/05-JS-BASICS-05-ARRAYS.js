// Arrays | Arreglos

var miInformacion = ['Domenico', 'Pagano', 37, true, ['programar','dibujar','montar bicicleta']]
    var domenico = {
        nombre: miInformacion[0],
        apellido: miInformacion[1],
        edad: miInformacion[2],
        programador: miInformacion[3],
        actividades: miInformacion[4]
    }
    console.log(domenico);

//------------------------------------------------------------------------------------------------

var estudiantes = ['Hugo', 'Paco', 'Luisa'];
    var estudiantesInvert = [
        estudiantes[estudiantes.length-1], 
        estudiantes[estudiantes.length-2], 
        estudiantes[estudiantes.length-3]
    ]
    console.log(estudiantesInvert);

//------------------------------------------------------------------------------------------------

var notas = [95, 36,74, 23, 11];
    var primeraNota;
    var ultimaNota;
    primeraNota = notas[0];
    ultimaNota = notas[notas.length-1]
    console.log(`Primera Nota: ${primeraNota} - Última Nota: ${ultimaNota}`);
    
//------------------------------------------------------------------------------------------------

// Arreglos anidados

let arregloPadre = [['arregloHijo1', 1], ['arregloHijo2', 2], ['arregloHijo3', 3]];
console.log(arregloPadre[0][1], arregloPadre[1][1], arregloPadre[2][1]);
console.log(arregloPadre[0][0], arregloPadre[1][0], arregloPadre[2][0]);

let listaEstudiantes = [['Pepito Mono', 78], ['Delfina Delfín', 99], ['Leonidas Gato', 93]]
let estNombres = [listaEstudiantes[0][0], listaEstudiantes[1][0], listaEstudiantes[2][0]]
let estNotas = [listaEstudiantes[0][1], listaEstudiantes[1][1], listaEstudiantes[2][1]]
console.log('Mis alumnos: ', estNombres);
console.log('Sus notas: ', estNotas);

let listaDePrecios = [['camisa florecitas', 39.99, 'R341'], ['celular poderoso', 1500.00, 'T599'], ['Zapatos Bailarín', 80.50, 'R623']]
console.log(listaDePrecios);
console.log('Productos: ', listaDePrecios[0][0], listaDePrecios[1][0], listaDePrecios[2][0]);
console.log('Precios: ', listaDePrecios[0][1], listaDePrecios[1][1], listaDePrecios[2][1]);
console.log('Códigos: ', listaDePrecios[0][2], listaDePrecios[1][2], listaDePrecios[2][2]);
    
    // modificar un elemento del arreglo:
    listaDePrecios[0][1] = 50.00
    console.log(listaDePrecios[0]);

    // añadir un producto:
    listaDePrecios.push(['celular SUPER poderoso', 3999.99, 'T610']);
    console.log(listaDePrecios);

    // añadir datos a los arrays anidados:
    listaDePrecios[0].unshift(1)
    listaDePrecios[0].push(true)
    listaDePrecios[1].unshift(2)
    listaDePrecios[1].push(true)
    listaDePrecios[2].unshift(3)
    listaDePrecios[2].push(false)
    listaDePrecios[3].unshift(4)
    listaDePrecios[3].push(true)

    console.log(listaDePrecios);
    console.log('id: ', listaDePrecios[0][0], listaDePrecios[1][0], listaDePrecios[2][0], listaDePrecios[3][0]);
    console.log('Productos: ', listaDePrecios[0][1], listaDePrecios[1][1], listaDePrecios[2][1], listaDePrecios[3][1]);
    console.log('Precios: ', listaDePrecios[0][2], listaDePrecios[1][2], listaDePrecios[2][2], listaDePrecios[3][2]);
    console.log('Códigos: ', listaDePrecios[0][3], listaDePrecios[1][3], listaDePrecios[2][3], listaDePrecios[3][3]);
    console.log('Oferta: ', listaDePrecios[0][4], listaDePrecios[1][4], listaDePrecios[2][4], listaDePrecios[3][4]);

// Arreglos multidimensionales
/*
    Arreglo                 | [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]
    Índice sub-arr          | [ [   0   ], [   1   ], [   2   ] ]
    Índice sub-sub-arr      | [ [0, 1, 2], [0, 1, 2], [0, 1, 2] ]
*/

let multiArr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
let soloPares = [multiArr[0][1], multiArr[1][0], multiArr[1][2], multiArr[2][1]]
let soloImpares = [multiArr[0][0], multiArr[0][2], multiArr[1][1], multiArr[2][0], multiArr[2][2]]
console.log(soloPares);
console.log(soloImpares);

// Métodos (push, pop, shift, unshift)
var estaciones = ['Otoño', 'Invierno', 'Primavera'];
console.log(estaciones);

// push()
estaciones.push('Verano')
console.log(estaciones);

// pop()
var verano = estaciones.pop();
console.log(verano);
var primavera = estaciones.pop()
console.log(primavera);
console.log(estaciones);

// shift()
var otonio = estaciones.shift()
console.log(otonio);
console.log(estaciones);

// unshift()
estaciones.unshift('Otoño');
estaciones.unshift('Verano');
estaciones.unshift('Primavera');
console.log(estaciones);