const array = [1, 6, 2, 9, 4, 7, 3];

// Using spread operator
const max1 = Math.max(...array);
console.log(max1); // Output: 9

// Using apply() method
const max2 = Math.max.apply(null, array);
console.log(max2); // Output: 9
