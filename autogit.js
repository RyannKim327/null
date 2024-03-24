let numbers = [1, 5, 3, 9, 2, 7];
let max = Math.max.apply(null, numbers);

console.log("The maximum value in the array is: " + max);
let numbers = [1, 5, 3, 9, 2, 7];
let max = Math.max(...numbers);

console.log("The maximum value in the array is: " + max);
