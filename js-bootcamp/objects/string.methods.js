let name = "Hashim Warren"

name.length

name.toUpperCase()

name.toLowerCase

//let password = "abcpassword123"
//console.log(password.includes('password'))

// Challenge are

//isValidPassword

let isValidPassword = function (password) {
    return (password.length > 8 && !password.includes('password'))
}

// length is more than 8 and it doesn't comtain the word password

console.log(isValidPassword('asdfg'))
console.log(isValidPassword('abc123(*&&%%%***'))
console.log(isValidPassword('asdxcxbxxcbxxfgpassword'))

