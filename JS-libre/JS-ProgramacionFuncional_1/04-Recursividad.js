// https://youtube.com/playlist?list=PLSnadb41DsdKMddToNitoXrgHK7CEbUki&si=ysiR27rOrNbqZrjm

// RECURSIVIDAD

// Cuenta Regresiva >
const cuentaRegresiva = (a) => {
    if(a < 0) return
    console.log(a)
    return cuentaRegresiva(a - 1)
}
cuentaRegresiva(10);


// Cuenta Ascendente <
const cuentaAscendente = (a, max) => {
    if(a > max) return;
    console.log(a);
    return cuentaAscendente(a + 1, max);
};
cuentaAscendente(0, 10);


// Ejemplo de Recursividad con Axios
const axios = require('axios');

const llamarApi = async (url, llamados = 0) => {
    try {
        const result = await axios.get(url)
        console.log(result)
        return result
    } catch (error) {
        if(llamados > 5){
            return ''
        }
        console.log(error)
        return llamarApi(url, llamados + 1)
    }
}

llamarApi('https://jsonplaceholder.typicode.com/users')