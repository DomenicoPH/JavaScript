// operador REST
// Permite pasar cualquier número de argumentos a una funcion y que estos argumentos se agrupen como un arreglo.

function miFuncion(...args){
    console.log('Longitud del arreglo: ',args.length);
    return args
}
// test 1
console.log(miFuncion(1))
console.log(miFuncion(1,2,3,4,5))
// test 2
console.log(miFuncion(1,'2',[3],false,{'cinco':5}))
    let whatif = miFuncion(1,'2',[3],false,{'cinco':5})
    console.log(whatif[0])
    console.log(whatif[1])
    console.log(whatif[2])
    console.log(whatif[3])
    console.log(whatif[4])
// test 3
console.log([1,2,3],[4,5,6]);
console.log(miFuncion([1,2,3],[4,5,6]).join(','));

//---//

const arrLong = (...args) => console.log(args.length)
arrLong(1,2,4)
arrLong(1,2,3,4,5)

//---//

const sumar = (...args) => {
    return args.reduce((a,b) => a + b, 0);
};
