let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)

//name, age, location object
//generate sting
//increate age by one

let aboutMe = {
    name: 'Hashim Warren',
    age: 39,
    location: "Greensboro"
}

let bio = `${aboutMe.name} is ${aboutMe.age} years old, and lives in ${aboutMe.location}`

console.log(bio)

aboutMe.age = aboutMe.age + 1
bio = `${aboutMe.name} is ${aboutMe.age} years old, and lives in ${aboutMe.location}`

console.log(aboutMe.age)
console.log(bio)


