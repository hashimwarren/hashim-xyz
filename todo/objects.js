toDo.ourForm.addEventListener("submit", (e) => {
  e.preventDefault()
  createItem(toDo.ourField.value)
  toDo.listTasks.push(toDo.ourField.value)

})

const toDo = {
  listTasks: ["Get milk", "Pick up cheese", "Clean room"],

  listHTML: document.createElement('li'),

  createNew: function() {
    this.listHTML.classList.add("needtodo")

  },

  ourForm: document.getElementById("ourForm"),
  ourField: document.getElementById("ourField"),

  add: function(x) {
    this.listTasks.push(x)
  },



}

console.log(toDo.createNew)

console.log(toDo.listTasks)

toDo.add("Pay bill")
console.log(toDo.listTasks)
console.log(toDo.ourForm)





