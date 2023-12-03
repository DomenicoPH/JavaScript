// Ejercicio práctico:
// Crear una función que permita buscar un contacto en una lista de contactos:
var contactos = [
    {
        nombre: 'Domenico',
        apellido: 'Pagano',
        numero: '942000123',
        gustos: ['programar', 'dibujar', 'cocinar']
    },
    {
        nombre: 'Graciela',
        apellido: 'Valderrama',
        numero: '784111321',
        gustos: ['bailar', 'estudiar idiomas', 'comer canchita']
    },
    {
        nombre: 'Gia',
        apellido: 'Perrito',
        numero: 'no tiene',
        gustos: ['ladrar', 'correr', 'oler pichis']
    },
];

// Función
function buscarContacto(nombre,propiedad){
    for(let i=0; i < contactos.length; i++){
        if(nombre === contactos[i].nombre) return contactos[i][propiedad] || '-- La propiedad no existe --'
    }
    return '¡ El contacto no está en la lista !'
}
console.log(buscarContacto('Juan','apellido'));
console.log(buscarContacto('Graciela','apellido'));
console.log(buscarContacto('Graciela','numero'));
console.log(buscarContacto('Graciela','kilometraje'));
console.log(buscarContacto('Domenico','apellido'));
console.log(buscarContacto('Domenico','numero'));
console.log(buscarContacto('Domenico','kilometraje'));
console.log(buscarContacto('Gia','apellido'));
console.log(buscarContacto('Gia','numero'));
console.log(buscarContacto('Graciela','gustos'));
console.log(buscarContacto('Domenico','gustos'));

    // Variable de la función (sintaxis alternativa)
    function busca(nombre,propiedad){
        for(let i=0; i< contactos.length; i++){
            if(contactos[i].nombre === nombre) return contactos[i][propiedad] || '-- La propiedad no existe --'
        }
        return '¡ El contacto no está en la lista !'
    }
    console.log(busca('Juan','apellido'));
    console.log(busca('Graciela','apellido'));
    console.log(busca('Graciela','numero'));
    console.log(busca('Graciela','kilometraje'));
    console.log(busca('Domenico','apellido'));
    console.log(busca('Domenico','numero'));
    console.log(busca('Domenico','kilometraje'));
    console.log(busca('Gia','apellido'));
    console.log(busca('Gia','numero'));
    console.log(busca('Graciela','gustos'));
    console.log(busca('Domenico','gustos'));