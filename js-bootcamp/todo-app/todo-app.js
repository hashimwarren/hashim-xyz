let todos = [{
    title:'Buy milk',
    completed: true
}, {
    title:'pay bills',
    completed: false
}, {
    title:'wash clothes',
    completed: false
}, {
    title:'get gas',
    completed: false
}, {
    title: 'make dinner',
    completed: true
}]

// ✔ 1. Setup a div contain for todos
// 2. Setup filters (searchText) and ✔ wire up a new filter input to change it
// 3. Create a renderTodos function to render and rerender the lastest filtered data



// add todo input

document.querySelector('#new-todo-text').addEventListener('input', function (e) {

    console.log(e.target.value)
})




notCompleted = todos.filter(function (todo) {
    return !todo.completed
})


const newGraph = document.createElement("h2")
newGraph.textContent = `You have ${notCompleted.length} todos left`
document.querySelector('body').appendChild(newGraph)


todos.forEach(function (todo) {
    const newParagraph = document.createElement("p")
    newParagraph.textContent = todo.title
    document.querySelector('body').appendChild(newParagraph)
})

//add click event listener

document.querySelector('#add-todo').addEventListener('click', function (e) {
    console.log(`The ${e.target} was clicked`)
})


