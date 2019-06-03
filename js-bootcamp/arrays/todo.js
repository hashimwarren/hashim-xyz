let todos = [{
    title:'Buy milk', completed: false}, {title:'pay bills', completed: false}, {title:'wash clothes', completed: true}, {title:'get gas', completed: false}, {title: 'make dinner', completed: true}]

// 1. convert array of strings to objects -> text, completed (true / false)
// 2. remove a todo by text value (case insensititve)

const deleteTodo = function (todos, title) {
    const index = todos.findIndex(function (todo, index) {
        return todo.title.toLowerCase() === title.toLowerCase()
    })
    if (index > - 1) {
        todos.splice(index, 1)
    }
}

//still working on it...
const getThingsToDo = function (todos) {
    return todos.filter(function (todo) {
        return todo.completed === false
    })

}


console.log(getThingsToDo(todos))

// console.log(todos)
// deleteTodo(todos, 'Pay bills')
// console.log(todos)


