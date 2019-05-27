let temp = 50

//logical and operator - true if both side are true, false otherwise
//logical or operator - true if at least one side is true, false otherwise
if (temp >= 60 && temp <= 90) {
    console.log('It is pretty nice out')
} else if (temp <= 0 || temp >= 120) {
    console.log("Do not go outside")
} else {
    console.log("Eh. Do what you want")
}

//chalenge area

let isGuestOneVegan = true
let isGuestTwoVegan = true

//are both vegan
//at least one vegan? Offer up some vegan options
//else offer up anything on the menu

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log("Here's our strictly vegan menu")
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log("Here are a few vegan options")
} else {
    console.log("Meat eaters deluxe menu")

}