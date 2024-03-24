let numbers = [5, 3, 8, 1, 2, 4];

numbers.sort(function(a, b) {
    return a - b;
});

console.log(numbers); // Output: [1, 2, 3, 4, 5, 8]
