let array = [1, 6, 3, 9, 2, 5];
let max = Math.max(...array);
console.log(max); // Output: 9
let array = [1, 6, 3, 9, 2, 5];
let max = Math.max.apply(null, array);
console.log(max); // Output: 9
let array = [1, 6, 3, 9, 2, 5];
let max = array[0];
for (let i = 1; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
  }
}
console.log(max); // Output: 9
let array = [1, 6, 3, 9, 2, 5];
let max = array.reduce(function(a, b) {
  return Math.max(a, b);
});
console.log(max); // Output: 9
