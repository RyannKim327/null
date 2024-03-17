let numbers = [5, 3, 8, 1, 2];
numbers.sort(function(a, b) {
    return a - b;
});

console.log(numbers);  // Output: [1, 2, 3, 5, 8]
numbers.sort(function(a, b) {
    return b - a;
});

console.log(numbers);  // Output: [8, 5, 3, 2, 1]
