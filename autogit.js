const numbers = [5, 3, 8, 1, 2, 9, 4];

// The sort() method performs a lexicographic sort by default,
// so to sort numbers correctly, we need to provide a comparison function.
numbers.sort((a, b) => a - b);

console.log(numbers); // Output: [1, 2, 3, 4, 5, 8, 9]
