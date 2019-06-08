// Declarative vs Imperative

const numbers = [1, 2, 3, 4, 5];

// declarative programming
const doubleWithDec = numbers.map(number => number * 2);

console.log(doubleWithDec)

// imperative programming
const doubleWithImp = [];
for (let i = 0; i < numbers.length; i++) {
    const numberdouble = numbers[i] * 2;
    doubleWithImp.push(numberdouble)
}

console.log(doubleWithImp);

// Functional Programming

let student = {
    firstName: "testing",
    lastName: "testing",
    marks: 500
}

// impure function
function appendAddress() {
    student.address = { streetNumber: "0000", streetName: "first", city: "somecity" };
}

console.log(appendAddress());

// pure function
function appendAddress(student) {
    let copystudent = Object.assign({}, student);
    copystudent.address = { streetNumber: "0000", streetName: "first", city: "somecity" };
    return copystudent;
}

console.log(appendAddress(student));

console.log(student);


// How do we change data if the data is immutable?
// We always produce transformed copies of the original instead of directly changing the original data.