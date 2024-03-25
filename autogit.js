let numbers = [5, 2, 8, 1, 4];
numbers.sort(function(a, b) {
    return a - b;
});

console.log(numbers); // Output: [1, 2, 4, 5, 8]
numbers.sort(function(a, b) {
    return b - a;
});

console.log(numbers); // Output: [8, 5, 4, 2, 1]
