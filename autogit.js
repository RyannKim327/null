const numbers = [1, 2, 3, 4, 5];
const max = Math.max(...numbers);
console.log(max); // Output: 5
const numbers = [1, 2, 3, 4, 5];
let max = numbers[0]; // Assume the first element as maximum

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i]; // Update the maximum
  }
}

console.log(max); // Output: 5
