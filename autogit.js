// Defining an array of integers
let numbers = [5, 2, 8, 1, 4];

// Sorting the array
numbers.sort(function(a, b) {
    return a - b;
});

console.log(numbers); // Output: [1, 2, 4, 5, 8]
