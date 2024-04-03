let numbers = [5, 10, 3, 8, 15];

let max = Math.max(...numbers);

console.log("The maximum value in the array is: " + max);
let numbers = [5, 10, 3, 8, 15];

let max = numbers.reduce((a, b) => Math.max(a, b));

console.log("The maximum value in the array is: " + max);
