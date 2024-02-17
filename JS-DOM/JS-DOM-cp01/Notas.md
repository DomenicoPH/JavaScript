<font size='6'>Notas: Document Object Model</font>  
ref: https://youtu.be/NuG59Zw8wf4?si=v5oto18djTt-1PBJ

<font size='3'><u>En la consola:</u></font>  

<font size='3'>1. document.documentElement  <font size='1'>--></font>  muestra todo el documento desde la etiqueta html.</font>

<font size='3'>2. document.doctype  <font size='1'>--></font>  muestra el tipo de documento, en este caso: &lt;!DOCTYPE html&gt;</font>

<font size='3'>3. document.head  <font size='1'>--></font>  muestra el head del documento html.</font>

<font size='3'>4. document.body  <font size='1'>--></font>  muestra el body del documento html.</font>  

<font size='3'>Solo se puede acceder directamente a los nodos superiores en los casos de:  
- html <i>( document.documentElement ) </i>
- doctype <i>( document.doctype )</i>
- head <i>( document.head )</i>
- body <i>( document.body )</i>
</font>

---
<font size='6'>1. Traversing</font>
---

<font size='5'>childNodes</font>  
<font size='3'>Para acceder a los hijos a los hijos de 'body' podemos usar la propiedad 'childNodes'. [retorna lista de nodos]  

        document.body.childNodes

Ejemplos:  

        const wrapper = document.body.childNodes[1]
        const comment = document.body.childNodes[3]
        const commentData = document.body.childNodes[3].data
</font>

<font size='5'>children</font>  
<font size='3'>Para obtener nodos de tipo elemento (nodos html) podemos usar la propiedad 'children'. [retorna html collection]  

        document.body.children
</font>

<font size='5'>firstChild</font>  
<font size='3'>Para obtener el primer nodo hijo de un padre podemos usar la propiedad 'firstChild'. Retorna el primer elemento hijo (de cualquier tipo).  

        document.body.firstChild
</font>

<font size='5'>firstElementChild</font>  
<font size='3'>Para obtener el primer nodo (Elemento html) hijo de un padre podemos usar la propiedad 'firstElementChild'. Retorna el primer elemento hijo (de tipo Elemento html).  

        document.body.firstElementChild
</font>  

<font size='5'>lastChild</font>  
<font size='3'>Para obtener el último nodo hijo de un padre podemos usar la propiedad 'firstChild'. Retorna el último elemento hijo (de cualquier tipo).  

        document.body.lastChild
</font>

<font size='5'>lastElementChild</font>  
<font size='3'>Para obtener el último nodo (Elemento html) hijo de un padre podemos usar la propiedad 'lastElementChild'. Retorna el último elemento hijo (de tipo Elemento html).  

        document.body.lastElementChild
</font>  

<font size='5'>hasChildNodes</font>  
<font size='3'>Para saber si un determinado elemento tiene hijos. Retorna 'true' si tiene hijos y 'false' si no.  

        document.body.lastElementChild
</font>  

<font size='5'>nextSibling</font>  
<font size='3'>Para obtener el hermano siguiente de un determinado elemento. Retorna al elemento siguiente (hermano).  

        const wrapper = document.body.children[0];  
        const div = wrapper.children[1];  
        console.log(div.nextSibling)  
</font>

<font size='5'>nextElementSibling</font>  
<font size='3'>Para obtener el ELEMENTO hermano siguiente de un determinado elemento. Retorna al elemento html siguiente (hermano).  

        const wrapper = document.body.children[0];  
        const div = wrapper.children[1];  
        console.log(div.nextElementSibling)  
</font>

<font size='5'>previousSibling</font>  
<font size='3'>Para obtener el hermano previo de un determinado elemento. Retorna al elemento siguiente (hermano).  

        const wrapper = document.body.children[0];  
        const div = wrapper.children[1];  
        console.log(div.previousSibling)  
</font>

<font size='5'>previousElementSibling</font>  
<font size='3'>Para obtener el ELEMENTO hermano ELEMENTO previo de un determinado elemento. Retorna al elemento html siguiente (hermano).  

        const wrapper = document.body.children[0];  
        const div = wrapper.children[1];  
        console.log(div.previousElementSibling)  
</font>

---

<font size='5'>addEventListener</font>  
<font size='3'>Desencadena un evento. Recibe como primer argumento el tipo de evento (p.e. 'click') y como segundo argumento una función que determinara la lógica de lo que ocurrirá al desencadenar el evento (p.e. () => {console.log('texto')}).
</font>

---

<font size='5'>parentNode</font>  
<font size='3'>Retorna el nodo padre de un determinado elemento. p.e.  

        const wrapper = document.body.children[0];
        const div = wrapper.children[1];
        const anchor1 = div.children[0]
        console.log(anchor1.parentNode) // El padre de 'anchor1' es: ---> div
        
        // parentNode puede devolver cualquier tipo de nodo.
</font>  

<font size='5'>parentElement</font>  
<font size='3'>Retorna el elemento HTML padre de un determinado elemento. p.e.  

        const wrapper = document.body.children[0];
        const div = wrapper.children[1];
        const anchor1 = div.children[0]
        console.log(anchor1.parentElement) // El elemento HTML padre de 'anchor1' es: ---> div

        // parentElement solo devuelve un elemento HTML como nodo padre.
</font>  

---

<font size='5'>getElementById</font>  
<font size='3'>
getElementById es un método del objeto document en JavaScript que se utiliza para seleccionar un elemento HTML de una página web utilizando su atributo id. Este método devuelve una referencia al primer elemento que tiene el atributo id especificado que coincide con el valor proporcionado.  

        const wrapper = document.getElementById('wrapper')
</font>  

<font size='5'>getElementsByClassName</font>  
<font size='3'>
getElementsByClassName es un método del objeto document en JavaScript que se utiliza para seleccionar uno o varios elementos HTML de una página web que tienen una clase CSS específica. Este método devuelve una colección HTML de todos los elementos que tienen la clase CSS especificada.  

        const links = document.getElementsByClassName('link')
</font>  

<font size='5'>getElementsByTagName</font>  
<font size='3'>
getElementsByTagName es un método del objeto document en JavaScript que se utiliza para seleccionar todos los elementos HTML que tienen un nombre de etiqueta específico en una página web. Este método devuelve una colección HTML de todos los elementos que coinciden con el nombre de etiqueta especificado.  

        const divs = document.getElementsByTagName('div')
        const anchors = document.getElementsByTagName('a')
        const parrafos = document.getElementsByTagName('p')
</font>  

<font size='5'>getElementsByName</font>  
<font size='3'>
getElementsByName es un método del objeto document en JavaScript que se utiliza para seleccionar todos los elementos HTML que tienen un atributo name específico en una página web. Este método devuelve una colección HTML de todos los elementos que tienen el atributo name especificado con el valor dado.  

        const input = document.getElementsByName('telefono')
</font>  

<font size='5'>querySelector</font>  
<font size='3'>
querySelector es un método del objeto document en JavaScript que se utiliza para seleccionar un elemento del DOM (Document Object Model) utilizando un selector CSS. Este método devuelve el primer elemento que coincida con el selector especificado.  

        const wrapper = document.querySelector('#wrapper')
</font>  

<font size='5'>querySelectorAll</font>  
<font size='3'>
querySelectorAll es un método del objeto document en JavaScript que se utiliza para seleccionar todos los elementos del DOM (Document Object Model) que coincidan con un selector CSS especificado. Este método devuelve una NodeList que contiene todos los elementos que coinciden con el selector especificado.  

        const links = document.querySelectorAll('.link')
</font>  

---

<font size='5'>className</font>  
<font size='3'>
className es una propiedad de los elementos del DOM en JavaScript que permite acceder y modificar las clases CSS asociadas a un elemento HTML. Esta propiedad devuelve una cadena que contiene el valor de todas las clases asignadas al elemento.  

        console.log(wrapper.className)
</font>  

<font size='5'>classList</font>  
<font size='3'>
classList es una propiedad de solo lectura que devuelve un objeto DOMTokenList, que representa la lista de clases de un elemento HTML. Permite acceder de manera fácil y conveniente a las clases asociadas a un elemento y realizar operaciones como agregar, eliminar o verificar la presencia de clases específicas.  

La interfaz DOMTokenList proporciona métodos útiles para manipular las clases de un elemento sin tener que manipular manualmente la cadena de texto que representa las clases. Algunos de los métodos más comunes incluyen add(), remove(), toggle() y contains().  

        console.log(wrapper.classList)
</font>  

<font size='5'>nodeName</font>  
<font size='3'>
nodeName es una propiedad de solo lectura de los nodos del DOM que devuelve el nombre del tipo de nodo en forma de cadena de texto. Indica el tipo del nodo, como "ELEMENT_NODE" para elementos HTML, "TEXT_NODE" para nodos de texto, "COMMENT_NODE" para comentarios, entre otros.

Es importante tener en cuenta que el valor devuelto por nodeName está en mayúsculas y es constante para cada tipo de nodo. Por ejemplo:

Para un elemento HTML, nodeName devolverá "ELEMENT_NODE".
Para un nodo de texto, nodeName devolverá "TEXT_NODE".
Para un nodo de comentario, nodeName devolverá "COMMENT_NODE".  

        console.log(link.nodeName)
        console.log(title.nodeName)
        console.log(wrapper.nodeName)
</font>  

---

<font size='5'>createElement</font>  
<font size='3'>
createElement es un método del objeto document en el DOM (Document Object Model) de JavaScript que se utiliza para crear un nuevo elemento HTML. Toma como argumento el nombre de la etiqueta del elemento que se quiere crear y devuelve un nuevo objeto Element representando ese elemento recién creado.

Por ejemplo, si quieres crear un nuevo elemento &lt;div&gt;, puedes usar createElement('div'). Si deseas crear un nuevo elemento &lt;p&gt;, usarías createElement('p'), y así sucesivamente.  

        // Crear un nuevo elemento div
        var nuevoDiv = document.createElement('div');

        // Asignar una clase al nuevo div
        nuevoDiv.className = 'mi-clase';

        // Asignar un texto al nuevo div
        nuevoDiv.textContent = 'Hola Mundo!';

        // Agregar el nuevo div al cuerpo del documento
        document.body.appendChild(nuevoDiv);

</font>  

<font size='5'>append</font>  
<font size='3'>
append() es un método utilizado en JavaScript para agregar uno o más elementos al final de un elemento padre. Puede aceptar varios argumentos, como nodos DOM, cadenas de texto y objetos de tipo DocumentFragment, y los agrega al final del elemento en el orden en que se proporcionan.

El método append() es parte de la API del DOM y está disponible en la mayoría de los navegadores modernos. Es una forma conveniente de agregar contenido dinámicamente a una página web sin tener que acceder directamente al árbol DOM.  

        // Crear un nuevo párrafo
        var nuevoParrafo = document.createElement('p');
        nuevoParrafo.textContent = 'Este es un nuevo párrafo.';

        // Agregar el párrafo al final del cuerpo del documento
        document.body.append(nuevoParrafo);

</font>  

<font size='5'>appendChild</font>  
<font size='3'>
appendChild() es un método utilizado en JavaScript para agregar un nodo hijo al final de la lista de hijos de un nodo padre específico en el DOM (Modelo de Objetos del Documento). Este método es ampliamente utilizado para manipular y modificar la estructura del árbol DOM en aplicaciones web.  

        parentNode.appendChild(childNode);

</font>  

<font size='5'>innerHTML</font>  
<font size='3'>
innerHTML es una propiedad en JavaScript que proporciona acceso al contenido HTML de un elemento. Permite obtener o establecer el HTML contenido dentro del elemento en el que se utiliza.

Al leer innerHTML, se obtiene una representación de la estructura HTML contenida dentro del elemento, incluyendo todas las etiquetas y su contenido. Al establecer innerHTML, se puede asignar una cadena de texto que represente una estructura HTML válida, y esta estructura se renderizará dentro del elemento, reemplazando cualquier contenido previo que pudiera tener.  

        // Obtener el elemento con el ID "miElemento"
        var elemento = document.getElementById('miElemento');

        // Obtener el contenido HTML del elemento y mostrarlo en la consola
        var contenido = elemento.innerHTML;
        console.log(contenido);

        // Establecer un nuevo contenido HTML para el elemento
        elemento.innerHTML = '<p>Este es un nuevo párrafo</p>';

</font>  

<font size='5'>outerHTML</font>  
<font size='3'>
outerHTML es una propiedad en JavaScript que proporciona acceso al contenido HTML completo de un elemento, incluida la etiqueta del propio elemento. Permite obtener una representación completa del elemento y su contenido HTML, incluyendo la etiqueta de apertura y cierre del elemento en sí.

Al leer outerHTML, se obtiene una cadena de texto que representa todo el elemento y su contenido, incluidas las etiquetas de apertura y cierre. Al establecer outerHTML, se puede reemplazar completamente el elemento actual por otro elemento o una estructura HTML diferente.  

        // Obtener el elemento con el ID "miElemento"
        var elemento = document.getElementById('miElemento');

        // Obtener el contenido HTML completo del elemento y mostrarlo en la consola
        var contenidoCompleto = elemento.outerHTML;
        console.log(contenidoCompleto);

        // Establecer un nuevo contenido HTML completo para el elemento
        elemento.outerHTML = '<div id="nuevoElemento"><p>Este es un nuevo párrafo</p></div>';

</font>  

<font size='5'>textContent</font>  
<font size='3'>
textContent es una propiedad en JavaScript que permite acceder al contenido textual de un elemento HTML y todos sus descendientes. Esta propiedad devuelve el texto contenido en el elemento, sin incluir el HTML que pueda tener dentro.  

        <p id="miParrafo">Este es un párrafo de ejemplo</p>

        var parrafo = document.getElementById('miParrafo');
        console.log(parrafo.textContent); // Esto imprimirá: "Este es un párrafo de ejemplo"

        var parrafo = document.getElementById('miParrafo');
        parrafo.textContent = "Este es un nuevo texto para el párrafo";
</font>  

---

<font size='5'>getAttribute</font>  
<font size='3'>
getAttribute es un método en JavaScript que se utiliza para obtener el valor de un atributo específico en un elemento HTML. Permite acceder al valor de cualquier atributo de un elemento, ya sea un atributo estándar o personalizado.  

        <a id="miEnlace" href="https://www.ejemplo.com">Enlace de ejemplo</a>

        var enlace = document.getElementById('miEnlace');
        var url = enlace.getAttribute('href');
        console.log(url); // Esto imprimirá: "https://www.ejemplo.com"


</font>  

<font size='5'>setAttribute</font>  
<font size='3'>
setAttribute es un método en JavaScript que se utiliza para establecer o modificar el valor de un atributo en un elemento HTML. Permite asignar un valor a cualquier atributo de un elemento, ya sea un atributo estándar o personalizado.  

        var enlace = document.getElementById('miEnlace');
        enlace.setAttribute('href', 'https://www.ejemplo.com');

</font>  

<font size='5'>hasAttribute</font>  
<font size='3'>
hasAttribute es un método en JavaScript que se utiliza para verificar si un elemento HTML tiene un atributo específico. Retorna un valor booleano (true o false) dependiendo de si el elemento tiene o no el atributo especificado.  

        elemento.hasAttribute('nombreAtributo');

        var enlace = document.getElementById('miEnlace');
        if (enlace.hasAttribute('target')) {
            console.log('El enlace tiene el atributo target.');
        } else {
            console.log('El enlace no tiene el atributo target.');
        }

</font>  

<font size='5'>removeAttribute</font>  
<font size='3'>
removeAttribute es un método en JavaScript que se utiliza para eliminar un atributo específico de un elemento HTML. Permite quitar un atributo existente de un elemento, lo que puede ser útil cuando necesitas manipular dinámicamente los atributos de un elemento en el DOM.  

        elemento.removeAttribute('nombreAtributo');

        var imagen = document.getElementById('miImagen');
        imagen.removeAttribute('alt');

</font>  

<font size='5'>attributes</font>  
<font size='3'>
En JavaScript, attributes es una propiedad que pertenece a los objetos Element del DOM (Document Object Model). Esta propiedad devuelve una colección de todos los atributos del elemento específico.

La propiedad attributes devuelve un objeto de tipo NamedNodeMap, que es una lista de objetos Attr (atributos) asociados al elemento. Cada objeto Attr representa un atributo del elemento y tiene propiedades como name (nombre del atributo) y value (valor del atributo).  

        // Obtener una referencia al elemento
        var miElemento = document.getElementById('miElemento');

        // Acceder a la lista de atributos del elemento
        var listaAtributos = miElemento.attributes;

        // Iterar sobre la lista de atributos
        for (var i = 0; i < listaAtributos.length; i++) {
            // Acceder a cada atributo individualmente
            var atributo = listaAtributos[i];
            console.log(atributo.name + ': ' + atributo.value);
        }

</font>  

---

<font size='5'>dataset</font>  
<font size='3'>
La propiedad dataset en JavaScript proporciona acceso a los atributos de datos personalizados (custom data attributes) de un elemento HTML. Estos atributos de datos personalizados son aquellos que comienzan con "data-" en su nombre.  

        <div id="miElemento" data-nombre="Juan" data-edad="30" data-ciudad="Madrid"></div>

        var miElemento = document.getElementById('miElemento');

        var nombre = miElemento.dataset.nombre; // 'Juan'
        var edad = miElemento.dataset.edad;     // '30'
        var ciudad = miElemento.dataset.ciudad; // 'Madrid'

La propiedad dataset devuelve un objeto DOMStringMap que contiene todos los atributos de datos personalizados del elemento, donde cada clave del objeto corresponde al nombre de un atributo de datos sin el prefijo "data-" y su valor es el valor del atributo.

</font>  

---
<font size='6'>2. Eventos</font>
---

<font size='5'>Event Bubbling</font>  
<font size='3'>
El "event bubbling" (o burbujeo de eventos) es un concepto en la programación de eventos en navegadores web. En un modelo de eventos de tipo "bubbling", cuando un evento ocurre en un elemento DOM (Document Object Model), como hacer clic en un botón, el evento se propaga desde ese elemento hacia arriba en la jerarquía del DOM, activando los controladores de eventos asociados en cada uno de los elementos en el camino.

Por ejemplo, si tienes una estructura de HTML donde un elemento A está dentro de otro elemento B, y haces clic en el elemento A, el evento de clic primero se activará en el elemento A y luego se propagará hacia arriba, activando los controladores de eventos asociados en el elemento A y luego en el elemento B si también tiene un controlador de eventos para ese evento específico.

El event bubbling es importante en la manipulación de eventos en JavaScript, ya que permite gestionar eventos de manera eficiente en elementos dentro de estructuras complejas de HTML, sin tener que asignar un controlador de eventos a cada elemento individualmente. Sin embargo, también puede causar problemas si no se maneja adecuadamente, ya que los eventos pueden propagarse a elementos no deseados y activar inadvertidamente acciones no deseadas. En tales casos, se puede utilizar el método event.stopPropagation() para detener la propagación del evento en la fase de burbujeo.

</font>  

---

<font size='5'>stopPropagation() & stopImmediatePropagation()</font>  
<font size='3'>
stopPropagation() y stopImmediatePropagation() son métodos utilizados en la gestión de eventos en JavaScript para controlar la propagación de eventos en el DOM (Document Object Model).

stopPropagation() se utiliza para detener la propagación del evento hacia arriba en la jerarquía del DOM, mientras que stopImmediatePropagation() detiene la propagación del evento y evita que otros controladores de eventos asociados al mismo elemento se ejecuten.
</font>  

<font size='5'>stopPropagation()</font>  
<font size='3'>
Este método se utiliza para detener la propagación de un evento en el modelo de eventos de burbujeo. Cuando se llama a stopPropagation() en un evento, se detiene la propagación del evento adicionalmente a los elementos superiores en la jerarquía del DOM. Es decir, el evento ya no se propagará hacia arriba en la jerarquía del DOM. Sin embargo, el controlador de eventos asociado al elemento actual todavía se ejecutará. Este método es útil cuando deseas detener que el evento se propague a elementos superiores en el DOM, pero aún deseas que el controlador de eventos asociado al elemento actual se ejecute.  

                elemento.addEventListener('click', function(event) {
                    event.stopPropagation();
                    // El evento no se propagará más arriba en la jerarquía del DOM
                    // Otros controladores de eventos click en elementos superiores no se activarán
                });

</font>  

<font size='5'>stopImmediatePropagation()</font>  
<font size='3'>
Este método funciona de manera similar a stopPropagation(), detiene la propagación del evento, pero además, evita que otros controladores de eventos asociados al mismo elemento se ejecuten. Esto significa que no solo detiene la propagación del evento hacia arriba en la jerarquía del DOM, sino que también detiene la ejecución de otros controladores de eventos para el mismo evento en el mismo elemento. Es útil cuando deseas detener la propagación del evento y evitar que otros controladores de eventos asociados al mismo elemento se ejecuten.  

                elemento.addEventListener('click', function(event) {
                    event.stopImmediatePropagation();
                    // El evento no se propagará más arriba en la jerarquía del DOM
                    // Otros controladores de eventos click en este mismo elemento no se activarán
                });

</font>  

---

<font size='5'>Fase de captura</font>  
<font size='3'>
La fase de captura es una de las fases del modelo de eventos en JavaScript que ocurre antes de que se desencadene el evento real en el objetivo o target del evento. En el modelo de eventos del DOM, los eventos pasan por tres fases distintas: captura, objetivo y burbujeo.

Durante la fase de captura, el evento se propaga desde el nodo raíz del árbol DOM hacia abajo hasta alcanzar el objetivo del evento. En esta fase, los controladores de eventos asociados a los ancestros del objetivo tienen la oportunidad de capturar y procesar el evento antes de que llegue al objetivo real del evento. Es importante destacar que no todos los eventos pasan por la fase de captura; por ejemplo, los eventos de clic (click) generalmente no lo hacen.

Para agregar un controlador de eventos durante la fase de captura, se puede utilizar el método addEventListener() con un tercer argumento opcional true. Por defecto, este tercer argumento es false, lo que significa que el controlador de eventos se agregará durante la fase de burbujeo. Sin embargo, si se establece en true, el controlador de eventos se agregará durante la fase de captura.  

        // Agrega un controlador de eventos durante la fase de captura
        elemento.addEventListener('click', function(event) {
            // Este controlador de eventos se activará durante la fase de captura
        }, true);

La fase de captura en el modelo de eventos del DOM es la fase inicial durante la cual el evento se propaga desde el nodo raíz hacia abajo en el árbol DOM hasta alcanzar el objetivo del evento. Durante esta fase, los ancestros del objetivo tienen la oportunidad de capturar y procesar el evento antes de que llegue al objetivo real del evento.

</font>  

---

<font size='5'>matches()</font>  
<font size='3'>
El método .matches() es una función que se utiliza en JavaScript para comprobar si un elemento coincide con un selector CSS especificado. Este método devuelve un valor booleano (true o false) dependiendo de si el elemento cumple con las condiciones establecidas por el selector CSS.  

                const divElement = document.querySelector('div');
                const matchesSelector = divElement.matches('.clase1.clase2'); // Verifica si el div tiene ambas clases 'clase1' y 'clase2'

.matches() es útil cuando necesitas comprobar si un elemento específico cumple con ciertos criterios de estilo o selección antes de realizar ciertas operaciones o aplicar ciertos estilos a ese elemento en tu código JavaScript.
</font> 

<font size='5'>closest()</font>  
<font size='3'>
El método .closest() es un método en JavaScript que se utiliza para encontrar el ancestro más cercano (padre o ancestro padre) que coincida con un selector CSS especificado. Este método es útil cuando necesitas encontrar un elemento específico dentro de la jerarquía del DOM a partir de otro elemento de referencia.  

                //Sintaxis básica
                elemento.closest(selector)

                <div id="padre">
                    <div class="hijo">
                        <div class="nieto"></div>
                    </div>
                </div>

                const nietoElemento = document.querySelector('.nieto');
                const padreElemento = nietoElemento.closest('#padre');

En este caso, .closest('#padre') buscará el ancestro más cercano del elemento .nieto que tenga el id #padre. Como resultado, padreElemento contendrá una referencia al elemento &lt;div id="padre"&gt;.

El método .closest() es particularmente útil cuando necesitas navegar hacia arriba en la jerarquía del DOM para encontrar un elemento específico a partir de otro elemento de referencia, sin tener que preocuparte por cuántos niveles de ancestros hay entre ellos.
</font> 

---

<font size='5'>Event Delegation</font>  
<font size='3'>
La delegación de eventos (Event Delegation) es un concepto en JavaScript que implica asociar un controlador de eventos a un ancestro común de varios elementos en lugar de asignar un controlador de eventos a cada elemento individualmente. Este patrón se utiliza principalmente para optimizar el rendimiento y simplificar el manejo de eventos en aplicaciones web con elementos dinámicos o un gran número de elementos.

En lugar de asignar un controlador de eventos a cada elemento, la delegación de eventos aprovecha el mecanismo de propagación de eventos en el DOM. Cuando ocurre un evento en un elemento hijo, como un clic en un botón, el evento se propaga desde el elemento hijo hasta el ancestro más cercano, que es el ancestro común de todos los elementos. Luego, el evento atraviesa la fase de burbujeo del modelo de eventos del DOM. Durante esta propagación, se puede capturar el evento en el ancestro común y determinar qué elemento hijo desencadenó el evento originalmente.

Al utilizar la delegación de eventos, puedes asignar un solo controlador de eventos al ancestro común y luego verificar el objetivo del evento dentro de ese controlador de eventos. Esto significa que no necesitas asignar controladores de eventos a cada elemento hijo individual, lo que puede resultar en un código más limpio y eficiente, especialmente en aplicaciones con una gran cantidad de elementos o elementos dinámicos que pueden agregarse o eliminarse en el DOM.

La delegación de eventos es particularmente útil en situaciones como:

- Listas o tablas dinámicas donde los elementos se agregan o eliminan dinámicamente.  
- Menús desplegables o sistemas de navegación donde los elementos pueden tener diferentes comportamientos según su estado.  
- Aplicaciones con un gran número de elementos que pueden desencadenar el mismo tipo de evento, como clics o cambios de estado.  

En resumen, la delegación de eventos es una técnica poderosa en JavaScript para manejar eventos de manera eficiente, asociando un solo controlador de eventos a un ancestro común en lugar de a cada elemento individual. Esto puede mejorar significativamente el rendimiento y la claridad del código en aplicaciones web.
</font>  

---
<font size='6'>3. Clases</font>
---
<font size='6'>ClassList (métodos)</font>  

<font size='5'>item()</font>  
<font size='3'>
El método .item() de la interfaz DOMTokenList, que es la interfaz a la que pertenece la propiedad classList de los elementos del DOM, se utiliza para obtener un elemento específico de la lista de clases de un elemento.

La DOMTokenList representa una lista de tokens, donde cada token corresponde a una clase CSS del elemento. El método .item() permite acceder a un elemento específico de esta lista utilizando su índice como parámetro.

Es importante tener en cuenta que los índices de la lista de clases comienzan desde cero, al igual que en los arrays. Si el índice pasado como argumento es mayor o igual al número de clases en la lista, el método .item() devuelve null.  

                <div class="clase1 clase2 clase3"></div>

                const divElement = document.querySelector('div');

                const primeraClase = divElement.classList.item(0); // Retorna "clase1"

                const segundaClase = divElement.classList.item(1); // Retorna "clase2"

                const terceraClase = divElement.classList.item(2); // Retorna "clase3"

                const claseInexistente = divElement.classList.item(3); // Retorna null

</font> 

<font size='5'>add()</font>  
<font size='3'>
El método .add() pertenece a la interfaz DOMTokenList, que es la interfaz a la que pertenece la propiedad classList de los elementos del DOM. Este método se utiliza para agregar una o más clases CSS a la lista de clases de un elemento.

El método .add() es útil cuando necesitas agregar clases dinámicamente a elementos del DOM en respuesta a eventos o acciones del usuario, lo que te permite modificar la apariencia o el comportamiento de los elementos según sea necesario en tu aplicación web.  

                <div id="miElemento" class="ejemplo"></div>

                const elemento = document.getElementById('miElemento');
                elemento.classList.add('nueva-clase');

                <div id="miElemento" class="ejemplo nueva-clase"></div>
</font> 

<font size='5'>remove()</font>  
<font size='3'>
El método .remove() es otro método de la interfaz DOMTokenList, que es la interfaz a la que pertenece la propiedad classList de los elementos del DOM. Este método se utiliza para eliminar una o más clases CSS de la lista de clases de un elemento.

El método .remove() es útil cuando necesitas modificar dinámicamente las clases de los elementos del DOM en respuesta a eventos o acciones del usuario, permitiéndote actualizar la apariencia o el comportamiento de los elementos según sea necesario en tu aplicación web.  

                <div id="miElemento" class="clase1 clase2 clase3"></div>

                const elemento = document.getElementById('miElemento');
                elemento.classList.remove('clase2');

                <div id="miElemento" class="clase1 clase3"></div>
</font> 

<font size='5'>toggle()</font>  
<font size='3'>
El método .toggle() es parte de la interfaz DOMTokenList, que es la interfaz a la que pertenece la propiedad classList de los elementos del DOM. Este método se utiliza para alternar la presencia de una clase CSS en la lista de clases de un elemento. Es decir, si la clase está presente en el elemento, .toggle() la elimina; si la clase no está presente, .toggle() la agrega.

Por ejemplo, supongamos que tienes un botón en tu HTML que muestra y oculta un elemento &lt;div&gt; al hacer clic. Inicialmente, el elemento &lt;div&gt; está oculto y tiene una clase CSS llamada "oculto". Al hacer clic en el botón, deseas alternar la clase "oculto" en el elemento &lt;div&gt; para mostrarlo o ocultarlo.  

                <button id="botonMostrarOcultar">Mostrar/Ocultar</button>
                <div id="miElemento" class="oculto">Contenido oculto</div>

                const botonMostrarOcultar = document.getElementById('botonMostrarOcultar');
                const miElemento = document.getElementById('miElemento');

                botonMostrarOcultar.addEventListener('click', function() {
                  miElemento.classList.toggle('oculto');
                });
</font> 

<font size='5'>contains()</font>  
<font size='3'>
El método .contains() es parte de la interfaz DOMTokenList, la cual representa una lista de tokens, como las clases CSS de un elemento del DOM. Este método se utiliza para verificar si un elemento tiene una clase CSS específica en su lista de clases.  

El método .contains() es útil cuando necesitas realizar acciones basadas en si un elemento tiene o no una clase específica. Puedes usar esta información para modificar dinámicamente el comportamiento o la apariencia de los elementos en tu aplicación web.  

                <div id="miElemento" class="clase1 clase2"></div>

                const miElemento = document.getElementById('miElemento');
                const tieneClase1 = miElemento.classList.contains('clase1');
                console.log(tieneClase1); // Esto imprimirá true 
</font> 

<font size='5'>replace()</font>  
<font size='3'>
El método classList.replace() se utiliza para reemplazar una clase existente en la lista de clases de un elemento del DOM por una nueva clase. Este método es útil cuando necesitas cambiar dinámicamente una clase específica en un elemento del DOM sin necesidad de eliminarla y agregarla por separado.  

                const elemento = document.getElementById('miElemento');
                elemento.classList.replace('class1', 'newClass');
</font> 

---
<font size='6'>4. CSSOM</font>  

<font size='3'>
CSSOM (Cascading Style Sheets Object Model) es una interfaz en el entorno del navegador que permite a los desarrolladores acceder y manipular las hojas de estilo CSS de un documento HTML utilizando JavaScript. Es una API que proporciona una representación estructurada de las reglas CSS aplicadas a un documento y permite realizar operaciones como leer, modificar o eliminar estilos de manera programática.

Al igual que el DOM (Document Object Model) para HTML, que representa la estructura del documento HTML como un árbol de nodos, el CSSOM representa las reglas de estilo CSS como un conjunto de objetos que pueden ser accedidos y manipulados mediante JavaScript.

Algunas de las operaciones comunes que se pueden realizar con CSSOM incluyen:

- Acceder a las reglas de estilo CSS aplicadas a un elemento.
- Modificar los estilos de un elemento específico.
- Añadir o eliminar reglas de estilo en una hoja de estilo CSS.
- Obtener información sobre las propiedades y valores de los estilos aplicados.

Esto es especialmente útil en aplicaciones web dinámicas donde los estilos deben cambiarse o ajustarse en respuesta a acciones del usuario o cambios en el estado de la aplicación.

La manipulación de CSSOM es una técnica poderosa que complementa la manipulación del DOM y proporciona a los desarrolladores un mayor control sobre la presentación visual de sus aplicaciones web utilizando JavaScript.  

</font> 

---

<font size='5'>setProperty()</font>  
<font size='3'>
setProperty es un método que se utiliza en JavaScript para establecer o modificar el valor de una propiedad CSS en un objeto de estilo (objeto CSSStyleDeclaration). Este método pertenece a la interfaz CSSStyleDeclaration, que representa los estilos CSS de un elemento del DOM.

                elemento.style.setProperty(nombrePropiedad, valor, prioridad);

- elemento es el elemento del DOM al que deseas aplicar estilos.
- nombrePropiedad es el nombre de la propiedad CSS que deseas establecer o modificar, como "color", "font-size", etc.
- valor es el valor que deseas asignar a la propiedad especificada.
- prioridad es una cadena opcional que indica la prioridad de la regla de estilo, como "important".  
---

                const miElemento = document.getElementById('miElemento');
                miElemento.style.setProperty('color', 'red');

En este caso, estamos utilizando setProperty para establecer la propiedad CSS "color" del elemento miElemento en "red". También es posible especificar una prioridad utilizando el tercer parámetro prioridad, si es necesario. Por ejemplo:

                miElemento.style.setProperty('color', 'red', 'important');

Esto establecerá la propiedad "color" con el valor "red" y la prioridad "important".

</font> 

<font size='5'>removeProperty()</font>  
<font size='3'>
removeProperty es un método que se utiliza en JavaScript para eliminar una propiedad CSS específica de un objeto de estilo (objeto CSSStyleDeclaration). Este método pertenece a la interfaz CSSStyleDeclaration, que representa los estilos CSS de un elemento del DOM.  

                elemento.style.removeProperty(nombrePropiedad);  

- elemento es el elemento del DOM del cual deseas eliminar la propiedad CSS.  
- nombrePropiedad es el nombre de la propiedad CSS que deseas eliminar, como "color", "font-size", etc.  
---

                <div id="miElemento" style="background-color: blue;">Contenido del elemento</div>

                const miElemento = document.getElementById('miElemento');
                miElemento.style.removeProperty('background-color');  

El método removeProperty es útil cuando necesitas eliminar dinámicamente propiedades CSS específicas de un elemento del DOM en respuesta a eventos o cambios en el estado de la aplicación. Esto te permite manipular la apariencia de los elementos de manera flexible y dinámica mediante JavaScript.

</font> 

<font size='5'>getPropertyValue()</font>  
<font size='3'>
El método getPropertyValue() es un método de la interfaz CSSStyleDeclaration, la cual representa los estilos CSS de un elemento del DOM. Este método se utiliza para obtener el valor actual de una propiedad CSS específica aplicada a un elemento.  

                valor = elemento.style.getPropertyValue(nombrePropiedad);

- elemento es el elemento del DOM del cual deseas obtener el valor de la propiedad CSS.
- nombrePropiedad es el nombre de la propiedad CSS de la cual deseas obtener el valor, como "color", "font-size", etc.
- valor es el valor de la propiedad CSS especificada.  
---

                <div id="miElemento" style="background-color: blue;">Contenido del elemento</div>

                const miElemento = document.getElementById('miElemento');
                const colorFondo = miElemento.style.getPropertyValue('background-color');
                console.log(colorFondo); // Esto imprimirá "blue"

El método getPropertyValue() devuelve una cadena que representa el valor de la propiedad CSS especificada. En este caso, colorFondo contendría el valor "blue", que es el color de fondo actual del elemento <div> según se define en CSS.

Este método es útil cuando necesitas acceder al valor de una propiedad CSS específica de un elemento del DOM para realizar operaciones basadas en ese valor, como modificar dinámicamente la apariencia o el comportamiento de los elementos en tu aplicación web.
</font> 

<font size='5'>getPropertyPriority()</font>  
<font size='3'>
El método getPropertyPriority() es un método de la interfaz CSSStyleDeclaration, la cual representa los estilos CSS de un elemento del DOM. Este método se utiliza para obtener la prioridad de una propiedad CSS específica aplicada a un elemento.  

                prioridad = elemento.style.getPropertyPriority(nombrePropiedad);

- elemento es el elemento del DOM del cual deseas obtener la prioridad de la propiedad CSS.
- nombrePropiedad es el nombre de la propiedad CSS de la cual deseas obtener la prioridad, como "color", "font-size", etc.
- prioridad es una cadena que representa la prioridad de la propiedad CSS, que puede ser "important" si la propiedad tiene una regla !important, o una cadena vacía si no.

                <div id="miElemento" style="background-color: blue !important;">Contenido del elemento</div>

                const miElemento = document.getElementById('miElemento');
                const prioridadColorFondo = miElemento.style.getPropertyPriority('background-color');
                console.log(prioridadColorFondo); // Esto imprimirá "important"

En este caso, prioridadColorFondo contendrá la cadena "important", ya que la propiedad CSS background-color tiene una regla !important aplicada.

Este método es útil cuando necesitas conocer si una propiedad CSS específica tiene una regla !important aplicada, lo que puede influir en la prioridad y el resultado final de la aplicación de estilos en tu aplicación web.

</font> 