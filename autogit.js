let numbers = [10, 5, 20, 15, 30];
let max = Math.max.apply(null, numbers);

console.log(max); // Output: 30
let numbers = [10, 5, 20, 15, 30];
let max = Math.max(...numbers);

console.log(max); // Output: 30
