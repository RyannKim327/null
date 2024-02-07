const array = [1, 5, 10, 3, 7];
const maxValue = Math.max(...array);
console.log(maxValue); // Output: 10
const array = [1, 5, 10, 3, 7];
let maxValue = array[0]; // assume the first element as the maximum

for (let i = 1; i < array.length; i++) {
  if (array[i] > maxValue) {
    maxValue = array[i]; // found a larger value, update the maximum
  }
}
console.log(maxValue); // Output: 10
