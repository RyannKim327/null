let numbers = [5, 2, 8, 4, 1];

numbers.sort(function(a, b) {
    return a - b;
});

console.log(numbers); // Output: [1, 2, 4, 5, 8]
let numbers = [5, 2, 8, 4, 1];

numbers.sort(function(a, b) {
    return b - a;
});

console.log(numbers); // Output: [8, 5, 4, 2, 1]
