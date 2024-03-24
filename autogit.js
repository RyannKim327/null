let numbers = [5, 3, 8, 1, 2, 9, 4, 7, 6];

numbers.sort(function(a, b) {
    return a - b;
});

console.log(numbers); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
