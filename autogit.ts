// Example array
let numbers: number[] = [1, 2, 3, 4, 5];

// Reverse the array
numbers.reverse();

console.log(numbers); // Output: [5, 4, 3, 2, 1]
// Example array
let numbers: number[] = [1, 2, 3, 4, 5];

// Create a new reversed array
let reversedNumbers: number[] = numbers.slice().reverse();

console.log(reversedNumbers); // Output: [5, 4, 3, 2, 1]
console.log(numbers); // Output: [1, 2, 3, 4, 5] (original array remains unchanged)
