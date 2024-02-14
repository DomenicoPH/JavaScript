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



