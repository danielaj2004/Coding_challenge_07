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

// Task 3
let calculateLoyaltyDiscount = (amount, years) => {
    let discountRate
    if (years >= 5) {
        discountRate = 0.15;
    }
    else if (years >= 3) {
        discountRate = 0.10;
    }
    else if (years < 3) {
        discountRate = 0.05;
    }
    discountedPrice = amount - (amount * discountRate);
    return `Discounted Price: $${discountedPrice.toFixed(2)}`;
}
console.log(calculateLoyaltyDiscount(100, 6)); // Discounted Price: $85.00
console.log(calculateLoyaltyDiscount(200, 2)); // Discounted Price: $190.00

//Task 4
function calculateShippingCost(weight, location, expedited = false) {
    let baseCost;
    if (location === "USA") {
        baseCost = 5 + (0.5 * weight);
    }
    else if (location === "Canada") {
        baseCost = 10 + (0.7 * weight);
    }
    if (expedited) {
        baseCost += 10;
    }
    return `Shipping Cost: $${baseCost.toFixed(2)}`;
}; // function to calculate cost of shipping
console.log(calculateShippingCost(10, "USA", true)); // Shipping Cost: $20.00
console.log(calculateShippingCost(5, "Canada", false)); // Shipping Cost: $13.50