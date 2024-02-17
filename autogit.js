let numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);

console.log(numbers); // Output: [1, 2, 3, 4, 5]
numbers.sort((a, b) => b - a);

console.log(numbers); // Output: [5, 4, 3, 2, 1]
