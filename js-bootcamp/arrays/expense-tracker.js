const account = {
    name: 'Hashim Warren',
    expenses: [],
    income: [],
    addExpense: function (description, amount) {
        const expense = {description, amount}
        this.expenses.push(expense)
    },
    addIncome: function (description, amount) {
        const income = {description, amount}
        this.income.push(income)

    },
    getAccountSummary: function () {
        let totalExpenses = 0
        let totalIncome = 0
        this.income.forEach(function (income) {
            totalIncome = totalIncome + income.amount
        })
        this.expenses.forEach(function (expense) {
            totalExpenses = totalExpenses + expense.amount
        })
        return `${this.name} has balanace of ${totalIncome - totalExpenses}. $${totalIncome} income and $${totalExpenses} in expenses`
    }
}







//add income array to account
// addIncome method - description, ammount
// account summary - income, expense, balanace
//Hashim has a balance of 10. 100 in income and 90 in expenses


account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())
// console.log(account.getAccountSummary())
