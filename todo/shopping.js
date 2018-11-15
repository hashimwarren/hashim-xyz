let ourForm = document.getElementById("ourForm") // creates variable for the object it returns
let ourField = document.getElementById("ourField")
let ourList = document.getElementById("ourList")
let finishedList = document.getElementById("finishedList")

ourForm.addEventListener("submit", (e) => { //ourForm is an object, addEventListener is a method from browser, submit is an argument, the "e" is an argument in the anon funtion
  e.preventDefault() // prevent form from reloading page
  createItem(ourField.value) //form object has property named "value", stores the user's input.
  //console.log(ourField.value)
})

function createItem(x) {
  let ourHTML = `<li class="needtodo slideInRight"><span>${x}</span> <button onclick="markFinished(this)">Done </button> <button onclick="editToDo(this)">Edit</button></li>` // "this" keyword selects the element, "button"
  ourList.insertAdjacentHTML("beforeend", ourHTML) //method takes arguments - position and string of text
  ourField.value = ""
  ourField.focus()
}

function deleteItem(elementToDelete) { //create seperate function for delete button because can't set event listener on elements that haven't been created yet
  elementToDelete.parentElement.remove() //selects specific delete button, then selects parent element, then "remove" method
}

function markFinished(y) {
  let finishHTML = `<li class="finished"> <span>${y.parentElement.firstChild.innerHTML}</span> </li>`
  finishedList.insertAdjacentHTML("beforeend", finishHTML )
  deleteItem(y)

}

function editToDo(elementToEdit) {
  let e = elementToEdit.parentElement.firstChild
  e.setAttribute("contenteditable", "true")
  e.setAttribute("class", "editbackground") //add class that changes background color and more
  e.focus() //focus cursor on newly editable field
  elementToEdit.innerHTML = "Save" //change edit button to save
  elementToEdit.setAttribute("onclick", "stopEditing(this)")




}

function stopEditing(editedElement) {
  let e = editedElement.parentElement.firstChild
  e.setAttribute("contenteditable", "false")
  e.classList.remove("editbackground")
  editedElement.innerHTML = "Edit"
  editedElement.setAttribute("onclick", "editToDo(this)")

}



