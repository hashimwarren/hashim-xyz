let myAccount = {
    name: 'Hashim Warren',
    expenses: 0,
    income: 0
}


let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
    return account

}

let addIncome = function (account, amount) {
    account.income = account.income + amount
    return account

}

let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
    return account
}

let getAccountSummary = function(account) {
     return `Account for ${account.name} is ${account.income - account.expenses}, $${account.income} in income, $${account.expenses} in expenses`
}

addIncome(myAccount, 4)
console.log(myAccount)


addExpense(myAccount, 1)
console.log(myAccount)

addExpense(myAccount, .75)
console.log(myAccount)

console.log(getAccountSummary(myAccount))

resetAccount(myAccount)
console.log(myAccount)

console.log(getAccountSummary(myAccount))



// addIncome - which account, and how much income





// resetAccount - reset income and expenses to 0



// getAccountSummary - balance, total expenses , total income
// account for Hashim is $900, $1000 in income, $100



console.log(getAccountSummary)

// addIncome
// addExpense
// addExpense
// getAccountSummary
// resetAccount
// getAccountSummary