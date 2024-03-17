let numbers = [4, 2, 10, 8, 6];

numbers.sort(function(a, b) {
    return a - b;
});

console.log(numbers); // [2, 4, 6, 8, 10]
numbers.sort(function(a, b) {
    return b - a;
});

console.log(numbers); // [10, 8, 6, 4, 2]
