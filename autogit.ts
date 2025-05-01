const numbers = [3, 5, 1, 8, 2];
const max = Math.max(...numbers);
console.log(max); // Output: 8
const numbers = [3, 5, 1, 8, 2];
const max = numbers.reduce((prev, current) => (current > prev ? current : prev), numbers[0]);
console.log(max); // Output: 8
const numbers = [3, 5, 1, 8, 2];
let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

console.log(max); // Output: 8
