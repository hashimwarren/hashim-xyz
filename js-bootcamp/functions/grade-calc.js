// arguments: students score, total possible score
// 15/20 -> You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

// let studentScore = 90
// let totalPossibleScore = 100

let gradeMessage = function (studentScore, totalPossibleScore, letterGrade = 'F') {
    let percentGrade = (studentScore / totalPossibleScore) * 100
    if (percentGrade <= 100 && percentGrade >= 90) {
         letterGrade = 'A'
    } else if (percentGrade <= 89 && percentGrade >= 80) {
        letterGrade = 'B'
    } else if (percentGrade <= 79 && percentGrade >= 70) {
        letterGrade = 'C'
    } else if (percentGrade <= 69 && percentGrade >= 60) {
        letterGrade = 'D'
    }
    return `You got a ${letterGrade} (${percentGrade}%)!`
}


console.log(gradeMessage(90, 100))