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

// Task 5
function calculateLoanInterest(principal, rate, years) {
    let interest = principal * rate * years;
    return `Total Interest: $${interest.toFixed(2)}`;
}
console.log(calculateLoanInterest(1000, 0.05, 3)); // Total Interest: $150.00
console.log(calculateLoanInterest(5000, 0.07, 5)); // Total Interest: $1750.00

// Task 6
let transactions = [500, 1200, 3000, 800, 2200]; // array fo transactions
function filterHighValueTransactions(transactions, filterFunction) {
    return transactions.filter(filterFunction);
}
console.log(filterHighValueTransactions(transactions, amount => amount > 1000)); // [1200, 3000, 2200]

// Task 7
function createBudgetTracker() {
    let balance = 0;
    return function(expense) {
        balance += expense;
        return `Current Balance: -$${balance}`;
    };
}
let budget = createBudgetTracker();
console.log(budget(300)); // Current Balance: -$300
console.log(budget(200)); // Current Balance: -$500