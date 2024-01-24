let arr = [1, 5, 3, 9, 2];
let max = Math.max(...arr);
console.log(max);  // Output: 9
let arr = [1, 5, 3, 9, 2];
let max = arr[0];  // Assume the first element is the maximum

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];  // Update max if a larger value is found
  }
}

console.log(max);  // Output: 9
