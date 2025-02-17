// Task 1
function calculateInvoice(subtotal, taxRate, discount) {
    const total =(subtotal + (subtotal * taxRate)) -discount;
    return `Total Invoice: $${total.toFixed(2)}`;
}; // function to calculate invoice total
console.log(calculateInvoice(100, 0.08, 5)); // Total Invoice: $103.00
console.log(calculateInvoice(500, 0.1, 20)); // Total Invoice: $530.00

// Task 2
function calculateHourlyWage(salary, hoursPerWeek) {
    const hourlyWage = salary / (hoursPerWeek * 52);
    return `Hourly Wage: $${hourlyWage.toFixed(2)}`;
}
console.log(calculateHourlyWage(52000, 40)); // Hourly Wage: $25.00
console.log(calculateHourlyWage(75000, 35)); // Hourly Wage: $41.21
