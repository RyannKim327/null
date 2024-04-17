var numbers = [3, 6, 2, 8, 4, 10];
var max = Math.max.apply(null, numbers);

console.log("The maximum value in the array is: " + max);
var numbers = [3, 6, 2, 8, 4, 10];
var max = Math.max(...numbers);

console.log("The maximum value in the array is: " + max);
