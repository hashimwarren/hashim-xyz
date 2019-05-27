//multiple arguments
let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 12)
console.log(result)

//default arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
    return 'Name: ' + name + ' score ' + score
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

//Challenge tip calculator
//total, tipPercent .2

let tipCalculator = function (total, tipPercent = .2) {
    return total * tipPercent
}

console.log(tipCalculator(100, .3))