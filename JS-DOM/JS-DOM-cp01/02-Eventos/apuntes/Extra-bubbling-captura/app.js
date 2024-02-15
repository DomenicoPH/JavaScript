const $divsEventos = document.querySelectorAll(".eventos-flujo div");
console.log($divsEventos)

function flujoEventos(e){
    console.log(`Hola, te saluda [${this.className}] | El evento lo desencadenó [${e.target.className}]`)
}

$divsEventos.forEach(div => {
    //div.addEventListener('click', flujoEventos)                 //Fase de burbuja (tercer parámetro en FALSE) = 3(3), 2(3), 1(3) -> 2(2), 1(2) -> 1(1)
    //div.addEventListener('click', flujoEventos, true)           //Fase de Captura (tercer parámetro en TRUE) = 1(3), 2(3), 3(3) -> 1(2), 2(2) -> 1(1)
    
    //También podemos usar un obj como tercer parámetro y especificar en su propiedad 'capture' el valor 'false' para la fase de 'burbuja' o 'true' para la de captura.
    div.addEventListener('click',flujoEventos,{
        capture: false,
        //capture: true,

        //ejecutar una sola vez y desactivar(!):
        once: true,
        //once: false,
    })
})