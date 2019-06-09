let todos = [{
    title:'Buy milk', completed: true}, {title:'pay bills', completed: false}, {title:'wash clothes', completed: true}, {title:'get gas', completed: false}, {title: 'make dinner', completed: true}]


const sortTodos = function (todos) {
    todos.sort(function (a, b) {
        if (a.completed === false) {
            return -1
        } else if (a.completed === true) {
            return 1
        } else {
            return 0
        }
    })
}


const deleteTodo = function (todos, title) {
    const index = todos.findIndex(function (todo, index) {
        return todo.title.toLowerCase() === title.toLowerCase()
    })
    if (index > - 1) {
        todos.splice(index, 1)
    }
}


const getThingsToDo = function (todos) {
    return todos.filter(function (todo) {
        return todo.completed === false
    })

}

console.log(todos)
sortTodos(todos)
console.log(todos)

// console.log(getThingsToDo(todos))

// console.log(todos)
// deleteTodo(todos, 'Pay bills')
// console.log(todos)


