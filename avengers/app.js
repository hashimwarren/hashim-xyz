let btn = document.getElementById("btn")
let hero = document.getElementById("hero")

btn.addEventListener("click", function() {
    fetch('https://kj7xwvifz8.execute-api.us-east-2.amazonaws.com/test/message')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    hero.textContent = myJson





  });


})



