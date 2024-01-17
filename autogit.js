const numbers = [5, 2, 8, 1, 9, 3];

// Function to sort the array in ascending order
const ascendingOrder = (a, b) => a - b;
numbers.sort(ascendingOrder);
console.log(numbers); // Output: [1, 2, 3, 5, 8, 9]

// Function to sort the array in descending order
const descendingOrder = (a, b) => b - a;
numbers.sort(descendingOrder);
console.log(numbers); // Output: [9, 8, 5, 3, 2, 1]
