//lexical scope (static scope)
//global scope - defined outside of all code blocks
//local scope - defined inside a code block

let varOne = 'varOne'

if (true) {
    //console.log(varOne)
    let varTwo = 'varTwo'
    return varTwo
}

console.log(varTwo)