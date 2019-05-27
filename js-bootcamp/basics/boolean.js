// === is the equality operator
// !== no equal
// < less than
// > greater than
// <= and >= less than or equal, greater than or equal

let temp = 310
let isFreezing = temp <= 30

if (isFreezing) {
    console.log("It is freezing outside!")
}

if (temp >= 100) {
    console.log("It is way too hot outside!")
    console.log("testing123")
}

console.log(isFreezing)

// CHALLENGE

//Create age set to your age
// calculatw is child - if they are 7 or under
// calculate if senior is 65 or older
//print is child value
//print is senoir value

let age = 65
let isChild = age <= 7
let isSenior = age >= 65

console.log(isChild)
console.log(isSenior)

if (age <= 7) {
    console.log("You get the children's discount")
}

if (age >= 65) {
    console.log("You get the senior discount")
}