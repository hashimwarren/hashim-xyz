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


// Challenge
//summary in <p> - you have x todos left
//add a p for each todo

//filter array for completed:false, then count that array.length

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