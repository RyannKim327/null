var array = [1, 2, 3, 4, 5];
var max = Math.max.apply(null, array);

console.log(max); // Output: 5
var array = [1, 2, 3, 4, 5];
var max = Math.max(...array);

console.log(max); // Output: 5
