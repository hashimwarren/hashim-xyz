let isAccountLocked = true
let userRole = 'admin'

// if (isAccountLocked) {
//     console.log('is account locked')
// } else {
//     console.log('Welcome')
// }

if (isAccountLocked) {
    console.log('Is account locked')
} else if (userRole === 'admin') {
    console.log('Welcome admin')
} else {
    console.log('welcome')

}

let temp = 74

if (temp <= 45) {
    console.log("It's freezing!")
} else if (temp >= 75) {
    console.log("It's hot outside!")
} else {
    console.log("It's pretty nice out")

}

// it is freezing outside!
// it is hot outside!
// Go for it. It is pretty nice