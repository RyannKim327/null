// Define an array of integers
let numbers = [5, 2, 8, 1, 4];

// Sort the array in ascending order
numbers.sort(function(a, b) {
    return a - b;
});

// Print the sorted array
console.log(numbers);
numbers.sort(function(a, b) {
    return b - a;
});
