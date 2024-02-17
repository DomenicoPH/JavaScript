const title = document.querySelector('.title')
const inputColor = document.querySelector('[type="color"]')
const inputRange = document.querySelector('[type="range"]')

//getPropertyValue()
title.style.fontFamily = 'cursive'
console.log(title.style.fontFamily)
console.log(title.style.getPropertyValue('font-family'))

//getComputedStyle
//console.log(getComputedStyle(title))      //TODOS los estilos computados (estilos finales tomados por el navegador)
console.log(getComputedStyle(title).background)
console.log(getComputedStyle(title).border)
console.log(getComputedStyle(title).color)

const estilosTitle = getComputedStyle(title);       //TODOS los estilos computados de 'title'
console.log('TITLE FONT SIZE : ',estilosTitle.fontSize);
console.log('TITLE COLOR : ',estilosTitle.color)
console.log('TITLE BORDER : ',estilosTitle.border)
console.log('TITLE PADDING : ',estilosTitle.padding)
console.log('TITLE BACKGROUND : ',estilosTitle.background)
console.log('TITLE - CONTENT',estilosTitle.content)

//Se puede usar un segundo argumento para especificar el pseudoelemento
const estilosTitleAfter = getComputedStyle(title,'::after')
console.log('TITLE::AFTER - CONTENT',estilosTitleAfter.content)

/*
inputColor.addEventListener('change', function(e){
    const newColor = e.target.value;
    console.log(newColor)
    title.style.color = newColor
})

inputRange.addEventListener('change', function(e){
    const newFontSize = e.target.value
    console.log(newFontSize)
    title.style.fontSize = newFontSize + 'pt'
})
*/

inputColor.addEventListener('change', (e) => {
    const newColor = e.target.value;
    title.style.setProperty('color', newColor)
})

inputRange.addEventListener('change', (e) => {
    const newFontSize = e.target.value;
    title.style.setProperty('font-size', newFontSize+'px', 'important')
    console.log(newFontSize+'px')

    //getPropertyPriority()
    console.log('Importancia de font-family: --->', title.style.getPropertyPriority('font-family') || '--Sin Prioridad--');
    console.log('Importancia de font-size: --->', title.style.getPropertyPriority('font-size'));
});