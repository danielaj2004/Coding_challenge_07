// Task 1
function calculateInvoice(subtotal, taxRate, discount) {
    const total =(subtotal + (subtotal * taxRate)) -discount;
    return `Total Invoice: $${total.toFixed(2)}`;
}; // function to calculate invoice total
console.log(calculateInvoice(100, 0.08, 5)); // Total Invoice: $103.00
console.log(calculateInvoice(500, 0.1, 20)); // Total Invoice: $530.00