const button = document.querySelector('.button')
const form = document.querySelector('.form')
const input = form.querySelector('.input')
const listContainer = document.querySelector('.list-container')

form.addEventListener('submit', handleSubmit);

message();

function message(){
    const h3 = document.createElement('h3')
        console.log(listContainer.firstElementChild)
    h3.textContent = listContainer.firstElementChild ? 'Tareas por hacer' : 'No hay tareas';
    listContainer.before(h3)
    //listContainer.after(h3)
}

function handleSubmit(e){
    e.preventDefault();
    const inputValue = input.value
        //console.log(inputValue)
    createTask(inputValue);
    this.reset()
}

function createTask(value){
    const newTask = document.createElement('li')
    newTask.textContent = value
        //console.log(newTask)
    //listContainer.appendChild(newTask)                        //con 'appendChild' añadimos UN ELEMENTO al final de la lista
    //listContainer.append(newTask, 'Tarea registrada')         //con 'append' añadimos VARIOS ELEMENTOS al final de la lista
    //listContainer.prepend(newTask)                            //con 'prepend' añadimos UNO o VARIOS ELEMENTOS por encima de la lista
    listContainer.prepend(newTask,'Nueva tarea añadida')
}

