const numbers: number[] = [10, 20, 5, 40, 15];
const maxValue = Math.max(...numbers);
console.log(maxValue); // Output: 40
const numbers: number[] = [10, 20, 5, 40, 15];
const maxValue = numbers.reduce((max, current) => (current > max ? current : max), numbers[0]);
console.log(maxValue); // Output: 40
const numbers: number[] = [10, 20, 5, 40, 15];
let maxValue = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > maxValue) {
    maxValue = numbers[i];
  }
}

console.log(maxValue); // Output: 40
const numbers: number[] = [10, 20, 5, 40, 15];
let maxValue = numbers[0];

numbers.forEach((number) => {
  if (number > maxValue) {
    maxValue = number;
  }
});

console.log(maxValue); // Output: 40
