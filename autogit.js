const numbers = [5, 1, 3, 2, 4];

// Sorting the array in ascending order
const sortedNumbers = numbers.sort((a, b) => a - b);
console.log(sortedNumbers);  // Output: [1, 2, 3, 4, 5]

// Sorting the array in descending order
const reversedNumbers = numbers.sort((a, b) => b - a);
console.log(reversedNumbers);  // Output: [5, 4, 3, 2, 1]
