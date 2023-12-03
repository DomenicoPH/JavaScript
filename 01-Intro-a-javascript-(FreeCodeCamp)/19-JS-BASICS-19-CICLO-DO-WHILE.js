// Ciclo do while

// Comparando ciclo While y ciclo Do While
    
    // while -> Evalúa la condición y luego se ejecuta el código
    var x;
    x = 5;
    while (x < 10){
        console.log(x);
        x++
    }

    // do while -> Se ejecuta y luego evalúa. La primera ejecución SIEMPRE se da.
    var y;
    y = 5;
    do{
        console.log(y);
        y++
    } while (y < 10)

    // do while
    var z = 16
    do{
        console.log(z);
        z++
    } while (z < 1);
    
    // do while
    do{
        console.log(z);
        //solo los pares:
        if(z % 2 === 0) console.log(z)
        //solo los impares:
        if(z % 2 !== 0) console.log(z)
        z--
    } while (z > 1)