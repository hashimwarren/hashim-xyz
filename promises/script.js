link = document.createElement("link")
link.rel = "stylesheet"
link.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
link.integrity = "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
link.crossorigin = "anonymous"

function loadInHead(x) {
    document.head.append(x);
  }

