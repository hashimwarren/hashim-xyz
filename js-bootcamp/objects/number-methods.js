let num = 103.941


console.log(num.toFixed(2))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 0
let max = 1

let randomNum = Math.floor(Math.random() * (max - min +1)) + min

console.log(randomNum)

// challenge area
//guess number from 1-5
//if guess is correct, true, else false


let randomNum = function (guess) {
    let min = 1
    let max = 5
    let generatedNum = Math.floor(Math.random() * (max - min + 1) + min)
    return [guess === generatedNum, generatedNum]

  }


  console.log(randomNum(2))



