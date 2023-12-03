// Objetos complejos

var ordenPizzas = [
    {
        tipo: 'margarita',
        tamaño: 'individual',
        precio: 5.70,
        toppings: [
            'extra queso',
            'chapiñones',
            'piña'
        ],
        takeAway: true,
    },
    {
        tipo: 'cuatro quesos',
        tamaño: 'familiar',
        precio: 18.60,
        toppings: [
            'extra queso',
            'pimentón'
        ],
        takeAway: false,
    },
    {
        tipo: 'napolitana',
        tamaño: 'individual',
        precio: 6.25,
        toppings: [],
        takeAway: true
    }
]
//pedidos:
console.log('Pedido 1', ordenPizzas[0]);
console.log('Pedido 2', ordenPizzas[1]);

// Pedido 1: ------------------------------------------------->

    // Notación de punto
console.log('--- Pedido 1 ---');
console.log(ordenPizzas[0].tipo);
console.log(ordenPizzas[0].tamaño);
console.log(ordenPizzas[0].precio);
console.log(ordenPizzas[0].toppings);
console.log(ordenPizzas[0].toppings[0]);
console.log(ordenPizzas[0].toppings[2]);
console.log(ordenPizzas[0].toppings[1]);
console.log(ordenPizzas[0].takeAway);
    // Notación de corchete
console.log(ordenPizzas[0]['tipo']);
console.log(ordenPizzas[0]['tamaño']);
console.log(ordenPizzas[0]['precio']);
console.log(ordenPizzas[0]['toppings']);
console.log(ordenPizzas[0]['toppings'][0]);
console.log(ordenPizzas[0]['toppings'][1]);
console.log(ordenPizzas[0]['toppings'][2]);
console.log(ordenPizzas[0]['takeAway']);

// Pedido 2: ------------------------------------------------->

    // Notación de punto
console.log('--- Pedido 2 ---');
console.log(ordenPizzas[1].tipo);
console.log(ordenPizzas[1].tamaño);
console.log(ordenPizzas[1].precio);
console.log(ordenPizzas[1].toppings);
console.log(ordenPizzas[1].toppings[0]);
console.log(ordenPizzas[1].toppings[1]);
console.log(ordenPizzas[1].takeAway);
    // Notación de corchete
console.log(ordenPizzas[1]['tipo']);
console.log(ordenPizzas[1]['tamaño']);
console.log(ordenPizzas[1]['precio']);
console.log(ordenPizzas[1]['toppings']);
console.log(ordenPizzas[1]['toppings'][0]);
console.log(ordenPizzas[1]['toppings'][1]);
console.log(ordenPizzas[1]['takeAway']);

// Pedido 3: ------------------------------------------------->

    // Notación de punto
console.log('--- Pedido 3 ---');
console.log(ordenPizzas[2].tipo);
console.log(ordenPizzas[2].tamaño);
console.log(ordenPizzas[2].precio);
console.log(ordenPizzas[2].toppings);
console.log(ordenPizzas[2].takeAway);
    // Notación de corchete
console.log(ordenPizzas[2]['tipo']);
console.log(ordenPizzas[2]['tamaño']);
console.log(ordenPizzas[2]['precio']);
console.log(ordenPizzas[2]['toppings']);
console.log(ordenPizzas[2]['takeAway']);

// Añadir un cuarto pedido utilizando el metodo push()
ordenPizzas.push({
    tipo: 'hawaiana',
    tamaño: 'mediana',
    precio: 10.50,
    toppings: [
        'extra queso',
        'extra piña',
    ],
    takeAway: true
});
console.log(JSON.stringify(ordenPizzas));
console.log(ordenPizzas[0]);
console.log(ordenPizzas[1]);
console.log(ordenPizzas[2]);
console.log(ordenPizzas[3]);

// Pedido 4: ------------------------------------------------->

    // Notación de punto
    console.log('--- Pedido 4 ---');
    console.log(ordenPizzas[3].tipo);
    console.log(ordenPizzas[3].tamaño);
    console.log(ordenPizzas[3].precio);
    console.log(ordenPizzas[3].toppings);
    console.log(ordenPizzas[3].toppings[0]);
    console.log(ordenPizzas[3].toppings[1]);
    console.log(ordenPizzas[3].takeAway);
        // Notación de corchete
    console.log(ordenPizzas[3]['tipo']);
    console.log(ordenPizzas[3]['tamaño']);
    console.log(ordenPizzas[3]['precio']);
    console.log(ordenPizzas[3]['toppings']);
    console.log(ordenPizzas[3]['toppings'][0]);
    console.log(ordenPizzas[3]['toppings'][1]);
    console.log(ordenPizzas[3]['takeAway']);