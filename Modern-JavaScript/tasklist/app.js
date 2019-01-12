//Define UI variables

const form =        document.querySelector('#task-form')
const taskList =    document.querySelector('.collection')
const clearBtn =    document.querySelector('.clear-tasks')
const filter =      document.querySelector('#filter')
const taskInput =   document.querySelector('#task')

//load all event listeners

loadEventListeners()

// load all event listeners

function loadEventListeners() {
    //add task event
    form.addEventListener('submit', addTask)
}

function addTask(e) {
    if(taskInput.value === '') {
        alert('Add a Task')
    }

    const li = document.createElement('li')
    //add class
    li.className = 'collectionItem'
    //create text node and append li
    li.appendChild(document.createTextNode(taskInput.value))
    //create new link element
    const link = document.createElement('a')
    link.className = 'delete-item secondary'
    link.innerHTML = '<i class="fa fa-remove"></i>'
    //apend the link to the li
    li.appendChild(link)

    //append li to the ul
    taskList.appendChild(li)

    //clear input
    taskInput.value = ''


    e.preventDefault()

}