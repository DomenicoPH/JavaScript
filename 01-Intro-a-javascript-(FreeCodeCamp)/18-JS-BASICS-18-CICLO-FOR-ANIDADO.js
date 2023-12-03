var miArreglo1 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

for(var i=0; i < miArreglo1.length; i++){
        console.log('---> Nueva iteración:');
        console.log('Arreglo:');
    var miArregloAnidado1 = miArreglo1[i]   // Arreglo
    for (let j=0; j < miArregloAnidado1.length; j++){
        console.log('-> Ciclo anidado:');
        console.log('Elemento');
        console.log(miArregloAnidado1[j]);  // Elemento
    }
}