const title = document.querySelector('.title')
const inputBackground = document.querySelector('.bgColorInput')
const inputColor = document.querySelector('[type="color"]')
const inputRange = document.querySelector('[type="range"]')
const body = document.querySelector('body')
const colorCodeText = document.getElementById('colorCodeText')

inputColor.addEventListener('change', (e) => {
    const newColor = e.target.value;
    title.style.setProperty('color', newColor)
    colorCodeText.textContent = newColor
    colorCodeText.style.color = newColor
})

inputBackground.addEventListener('change', (e) => {
    const newColor = e.target.value
    console.log(newColor)
    body.style.setProperty('background-color', newColor)
    colorCodeBg.textContent = newColor
    colorCodeBg.style.color = newColor
})


inputRange.addEventListener('change', (e) => {
    const newFontSize = e.target.value;
    title.style.setProperty('font-size', newFontSize+'px', 'important')
    const size = newFontSize+'px'
    console.log(size)
    textSize.textContent = newFontSize+'px'
})