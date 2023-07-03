let grade = parseInt(prompt('Enter a grade between 1 and 100'))

if (grade > 100 || grade < 1) console.log('The grade is invalid.')

if (grade >= 60 && grade <= 69) {
    console.log('You received a D')
} else if (grade >= 70 && grade <= 79) {
    console.log('You received a C')
} else if (grade >= 80 && grade <= 89) {
    console.log('You received a B')
} else if (grade >= 90 && grade <= 100) {
    console.log('You received a B')
} else if (grade < 60) {
    console.log('You received a F')
}