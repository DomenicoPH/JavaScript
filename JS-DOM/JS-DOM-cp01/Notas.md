<font size='5'>Notas: Document Object Model</font>  
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

<font size='5'>childNodes</font>  
<font size='3'>Para acceder a los hijos a los hijos de 'body' podemos usar la propiedad 'childNodes'. [retorna lista de nodos]  
- document.body.childNodes

Ejemplos:
- const wrapper = document.body.childNodes[1]
- const comment = document.body.childNodes[3]
- const commentData = document.body.childNodes[3].data
</font>

<font size='5'>children</font>  
<font size='3'>Para obtener nodos de tipo elemento (nodos html) podemos usar la propiedad 'children'. [retorna html collection]
- document.body.children
</font>

<font size='5'>firstChild</font>  
<font size='3'>Para obtener el primer nodo hijo de un padre podemos usar la propiedad 'firstChild'. Retorna el primer elemento hijo (de cualquier tipo).
- document.body.firstChild
</font>

<font size='5'>firstElementChild</font>  
<font size='3'>Para obtener el primer nodo (Elemento html) hijo de un padre podemos usar la propiedad 'firstElementChild'. Retorna el primer elemento hijo (de tipo Elemento html).
- document.body.firstElementChild
</font>  

<font size='5'>lastChild</font>  
<font size='3'>Para obtener el último nodo hijo de un padre podemos usar la propiedad 'firstChild'. Retorna el último elemento hijo (de cualquier tipo).
- document.body.lastChild
</font>

<font size='5'>lastElementChild</font>  
<font size='3'>Para obtener el último nodo (Elemento html) hijo de un padre podemos usar la propiedad 'lastElementChild'. Retorna el último elemento hijo (de tipo Elemento html).
- document.body.lastElementChild
</font>  

<font size='5'>hasChildNodes</font>  
<font size='3'>Para saber si un determinado elemento tiene hijos. Retorna 'true' si tiene hijos y 'false' si no.
- document.body.lastElementChild
</font>  

<font size='5'>nextSibling</font>  
<font size='3'>Para obtener el hermano siguiente de un determinado elemento. Retorna al elemento siguiente (hermano).
- const wrapper = document.body.children[0];  
- const div = wrapper.children[1];  
- console.log(div.nextSibling)  
</font>