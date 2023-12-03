// Objetos anidados:

var miReceta = {
    descripcion: 'Mi postre favorito',
    costo: 15.6,
    ingredientes: {
        masa: {
            harina: '100 g',
            sal: '1 cucharadita',
            agua: '1 taza'
        },
        cobertura: {
            azucar: '120 g',
            chocolate: '4 cucharadas',
            mantequilla: '200 g',
        }
    }
};
//Detalles
console.log('Descripción: ', miReceta.descripcion);
console.log('Costo: ', miReceta.costo);
console.log('Ingredientes: ', miReceta.ingredientes);

//ingredientes
console.log('Masa: ', miReceta.ingredientes.masa);
console.log('Cobertura: ', miReceta.ingredientes.cobertura);

//medidas
console.log('---- masa: ');
console.log('harina: ', miReceta.ingredientes.masa.harina);
console.log('sal: ', miReceta.ingredientes.masa.sal);
console.log('agua: ', miReceta.ingredientes.masa.agua);
console.log('---- cobertura: ');
console.log('azucar: ', miReceta.ingredientes.cobertura['azucar']);
console.log('chocolate: ', miReceta.ingredientes.cobertura['chocolate']);
console.log('mantequilla: ', miReceta.ingredientes.cobertura['mantequilla']);

// Notación de punto y notación de corchete ------------------------>

// Esto...
console.log(miReceta['ingredientes']['masa']['harina']);
console.log(miReceta['ingredientes']['cobertura']['chocolate']);
//es igual que esto:
console.log(miReceta.ingredientes.masa.harina);
console.log(miReceta.ingredientes.cobertura.chocolate);
//y que esto:
console.log(miReceta['ingredientes'].masa['harina']);
console.log(miReceta.ingredientes['cobertura'].chocolate);