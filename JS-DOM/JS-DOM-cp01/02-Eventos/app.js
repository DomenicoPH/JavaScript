const section = document.querySelector('.section')

// Event Delegation

function eventDelegationTest(e){
    //console.log(e.target);
    let lastWord = e.target.textContent.split(' ')
    console.log(lastWord)
    if(e.target.matches('.button-color')){
        console.log(`Hiciste click en el botón ${lastWord[lastWord.length - 1]}`)
    }
}

function eventDelegation(e){
    if(e.target.matches('.button-color')){
        const getColor = e.target.getAttribute('data-color');
        console.log(getColor)
        e.currentTarget.style.backgroundColor = getColor
    }
}

section.addEventListener('click', eventDelegation)