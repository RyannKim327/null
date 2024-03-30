let numbers = [5, 2, 9, 3, 7];
numbers.sort(function(a, b) {
    return a - b;
});

console.log(numbers); // Output: [2, 3, 5, 7, 9]
numbers.sort(function(a, b) {
    return b - a;
});

console.log(numbers); // Output: [9, 7, 5, 3, 2]
