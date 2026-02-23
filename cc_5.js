console.log(`Coding Challenge 5 - Payroll Processing Toolkit: Automating Repetitive Calculations - Andrew Marello`);

//Step 2: Create an array of 3-5 employee objects
const employee = [
    {name: "Clayton", hourlyRate: 20, hoursWorked: 40},
    {name: "Johnny", hourlyRate: 15, hoursWorked: 35},
    {name: "Mason", hourlyRate: 25, hoursWorked: 30},
    {name: "Nicolas", hourlyRate: 18, hoursWorked: 45},
];

// Step 3: Write a function calculateBasePay(rate, hours) that returns pay for up to 40 hours
function calculateBasePay(rate, hours) {
    if(hours <=40) {
        return rate * hours;
        console.log()
    }
}
// Step 4: Write calculateOvertimePay(rate, hours) that returns 1.5x rate for hours over 40
function calculateOvertimePay(rate, hours) {
    if(hours > 40) {
        return (rate * 40) + ((hours - 40) * rate * 1.5);
    }
}
//