// reference - https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
// create empty object. Then fill object with key/value pairs of the URL's parameters

let ourForm = document.getElementById("ourForm")

function arrayURLtoObject() {
    let params = (new URL(document.location)).searchParams
    let e = {}
    if (Object.keys(e).length === 0 && e.constructor === Object) {
        for (let param of params) {
            e[param[0]] = param[1]

        }

    }
    return e

}

objectURL = arrayURLtoObject()

// Add url parameters to local storage
storedURLParameters = localStorage.getItem('urlParameters')

if (!storedURLParameters) { //if there are no stored url parameters, run this code
    localStorage.setItem(
        'urlParameters',
        JSON.stringify(objectURL) //convert the object into a string
    )
}

localData = JSON.parse(localStorage.getItem('urlParameters'))

console.log(localData)

//initiate FormData object
const submittedData = new FormData(ourForm)

//Object.entries() method returns an array,
//forEach iterates over it,
//FormData.append inserts the key, value pairs





request = new XMLHttpRequest()

ourForm.addEventListener("submit", (e) => {
    e.preventDefault() // prevent form from reloading page
    submitFormToMailchimp()

  })

function submitFormToMailchimp() {
    request.open("POST", "https://wt-a7517fede6766ea5c54bb2d101927597-0.sandbox.auth0-extend.com/add-to-mailchimp")
    Object.entries(localData).forEach(([key, value]) =>  submittedData.append(key, value))
    request.send(submittedData)
    console.log(submittedData.getAll("utm_source"))
    console.log(submittedData.getAll("utm_medium"))

}




