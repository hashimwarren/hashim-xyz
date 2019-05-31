let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}` ,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`,
    }
    console.log()

}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

//Challenge - create all three temps
//create function that takes fahrenheit, return object with all three

let tempConverter = function (fahrenheit) {
    return {
        fahrenheit,
        celsius: (fahrenheit - 32) * (5/9),
        kelvin: (fahrenheit + 459.67) * 5/9

    }

}
let coldConverted = tempConverter(24)
console.log(coldConverted.fahrenheit)
console.log(coldConverted.celsius)
console.log(coldConverted.kelvin)