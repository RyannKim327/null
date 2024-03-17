let numbers = [5, 2, 8, 10, 3];
numbers.sort(function(a, b) {
    return a - b;
});

console.log(numbers); // This will output: [2, 3, 5, 8, 10]
let numbers = [5, 2, 8, 10, 3];
numbers.sort(function(a, b) {
    return b - a;
});

console.log(numbers); // This will output: [10, 8, 5, 3, 2]
