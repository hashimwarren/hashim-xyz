//multiple arguments
let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 12)
console.log(result)

//default arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
    //return 'Name: ' + name + ' score ' + score
    return `Name: ${name} Score: ${score}`
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

//Challenge tip calculator
//total, tipPercent .2

let tipCalculator = function (total, tipPercent = .2) {
    return total * tipPercent
}

let tip = (tipCalculator(100, .3))

console.log(tip)

let name = 'Hashim'
let age = 12
console.log(`My name is ${name}. I am ${age}`)