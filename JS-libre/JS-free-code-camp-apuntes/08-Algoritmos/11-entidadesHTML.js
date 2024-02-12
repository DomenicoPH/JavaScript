//  Convierte entidades HTML

/*  Convierte los caracteres &, <, >, " (dobles comillas), y ' (apóstrofo), en un cadena con su correspondiente entidad HTML. */

function convertHTML(str){
    const htmlEntities = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&apos;'
    }
    return str.replace(/[&<>"']/g, match => htmlEntities[match])
}
console.log(convertHTML("Dolce & Gabbana"))
console.log(convertHTML("Hamburgers < Pizza < Tacos"))
console.log(convertHTML("Sixty > twelve"))
console.log(convertHTML('Stuff in "quotation marks"'))
console.log(convertHTML("Schindler's List"))
console.log(convertHTML("<>"))
console.log(convertHTML("abc"))


/*  En este código, htmlEntities es un objeto que mapea los caracteres especiales a sus entidades HTML correspondientes. 
    Luego, se utiliza una expresión regular en el método replace para buscar y reemplazar estos caracteres en la cadena original.

    El resultado de convertHTML("Dolce & Gabbana") será "Dolce &amp; Gabbana". Este enfoque asegura que los caracteres especiales 
    se conviertan correctamente en sus entidades HTML.
*/