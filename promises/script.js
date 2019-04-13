link = document.createElement("link")
link.rel = "stylesheet"
link.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
link.integrity = "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
link.crossorigin = "anonymous"

function loadInHead(x) {
    document.head.append(x);
  }

function ownFetch(url) {
  return new Promise(function (resolve, reject) {
    let req = new XMLHttpRequest();

    req.open(url);
    req.send()

    req.onload = function() {
      resolve(req)
    }

    req.onerror = function() {
      reject()
    }

  })
}

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then()


