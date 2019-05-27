//function - input (argument), code, output (return value)

let greetUser = function () {
    console.log('welcome user')
}

greetUser()

let square = function (num) {
    let result = num * num
    return result

}

let value = square(10)
let otherValue = square(3)

console.log(value)
console.log(otherValue)

// Challenge

//convertFahrenheitToCelsius

let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * (5/9)
    return celsius
}

console.log(convertFahrenheitToCelsius(32))
console.log(convertFahrenheitToCelsius(68))

// call a couple of time (32 -> 0) (68 -> 20)

// print converted values