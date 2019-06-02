//create an array with 5 todos
//you have x todos
//print the first and second to last items

let todos = ['Buy milk', 'pay bills', 'wash clothes', 'get gas', 'make dinner']

console.log(`You have ${todos.length} todos. Your first todo is "${todos[0]}". Your second last todo is "${todos[todos.length - 2]}"`)

// delete the third item
// add a new item onto the end
// remove the first item from the list

console.log(todos.splice(2, 1))
console.log(todos)
todos.push('Learn to code')
console.log(todos)
console.log(todos.shift())
console.log(todos)

// use forEach array method
// print
//     1. The First Item
//     2. The Second Item

todos.forEach(function (item, index) {
    console.log(`${index +1}. ${item}`)


});

