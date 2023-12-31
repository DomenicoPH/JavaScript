let numbers = [ 10, 20, 30, 40, 50, 60 ]

function showDom(element, arr){
    document.getElementById(element).innerHTML = "";
    for(let i = 0; i < arr.length; i++){
        document.getElementById(element).innerHTML += `<div>${arr[i]}</div>`
    }
}

showDom("array1", numbers)