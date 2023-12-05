// Funciones flecha =>
// * Función anónima: funciones sin un nombre específico

// función normal
const fecha = function(){
    return new Date()
}
console.log(fecha());

// función flecha
const fechaFlecha = () => new Date();
console.log(fechaFlecha());

//---//

// Funciones flecha con parámetros
const sumarTres = function(x){
    return x + 3;
}
console.log(sumarTres(2));

    // flecha =>
const sumarTresFlecha = (x) => x + 3
console.log(sumarTresFlecha(2));

//---//

const concatenarArrs = function(arr1,arr2){
    return arr1.concat(arr2)
}
console.log(concatenarArrs([1,2],[3,4,5]))

    // flecha =>
const concatenarArrsFlecha = (arr1,arr2) => arr1.concat(arr2);
console.log(concatenarArrsFlecha([1,2],[3,4,5]));

//---//

const sum = function(a,b){
    let num = 6;
    return a + b + num;
};
console.log(sum(5,4));

    // flecha =>
const arrowSum = (a,b) => {
    let num = 6;
    return a + b + num;
};
console.log(arrowSum(5,4));

//---//

// Valores por defecto para parámetros
const incrementar = (num=0, valor=1) => num + valor
// num=0 : valor por defecto es 0
// valor=1 : valor por defecto es 1
/* Si no ingresamos parámetros en la función esta operará
   con los valores por defecto (0 + 1). Retornará 1 por
   defecto */
   // test c/params
   console.log(incrementar(1,5));
   console.log(incrementar(5,5));
   // test s/params (valores por defecto)
   console.log(incrementar());