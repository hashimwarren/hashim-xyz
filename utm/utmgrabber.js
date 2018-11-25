// reference - https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
// create empty object. Then fill object with key/value pairs of the URL's parameters

function arrayURLtoObject() {
    let params = (new URL(document.location)).searchParams
    let e = {}

    for (let param of params) {
        e[param[0]] = param[1]

    }
    return e

}

objectURL = arrayURLtoObject()
console.log(objectURL)


