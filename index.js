// Code your solutions in this file
const employeeArray = ['Joe', 'Gabe'];
function printBadges (employeeArray) {
    for (let index = 0; index < employeeArray.length; index++) {
        console.log(`Welcome ${employeeArray[index]}! You are employee #${index+1}.`);
    }
    return employeeArray;
}

function tailsNeverFails() {
    let numTails = 0;
    let toss = Math.random();
    while (toss >= 0.5) {
        numTails++;
        toss = Math.random();

    }
    return `You got ${numTails} tails in a row!`;
}