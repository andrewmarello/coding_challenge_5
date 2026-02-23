console.log(`Coding Challenge 05 - Andrew Marello`);

//Step 2: Create an array of 3-5 employee objects
const employee = [
    {name: "Clayton", hourlyRate: 20, hoursWorked: 40},
    {name: "Johnny", hourlyRate: 15, hoursWorked: 35},
    {name: "Mason", hourlyRate: 25, hoursWorked: 20},
    {name: "Nicolas", hourlyRate: 18, hoursWorked: 30},
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
        const overtimeHours = hours - 40;
        return (overtimeHours * rate * 1.5);
    } else {
        return 0;
    }
    }
// Step 5: Write calculateTaxes(grossPay) that deducts 15% tax
function calculateTaxes(grossPay) {
    const taxRate = 0.15;
    const taxValue = grossPay * taxRate;
    const netPay = grossPay - taxValue;
    return netPay;
}
// Step 6: Write processPayroll(employee) that returns an object with name, basePay, overtimePay, grossPay, and netPay
function processPayroll(employee) {
    const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
    const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
    const grossPay = basePay + overtimePay;
    const netPay = calculateTaxes(grossPay);
    return {
        name: employee.name,
        basePay: basePay,
        overtimePay: overtimePay,
        grossPay: grossPay,
        netPay: netPay
    };
}
// Step 7: Loop through your employee array and log the payroll object or each employee
employee.forEach(emp => {
    const payroll = processPayroll(emp);
    console.log(payroll);
});
