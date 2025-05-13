const numbers = [3, 6, 2, 8, 4];
const maxValue = Math.max(...numbers);
console.log(maxValue);  // Output: 8
const numbers = [3, 6, 2, 8, 4];
let maxValue = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > maxValue) {
    maxValue = numbers[i];
  }
}

console.log(maxValue);  // Output: 8
const numbers = [3, 6, 2, 8, 4];
const maxValue = numbers.reduce((max, current) => (current > max ? current : max), numbers[0]);
console.log(maxValue);  // Output: 8
