const numbers: number[] = [1, 2, 3, 4, 5];

const mean = numbers.reduce((acc, current) => acc + current, 0) / numbers.length;

console.log(mean); // Output: 3
const numbers: number[] = [1, 2, 3, 4, 5];
let sum = 0;

for (const num of numbers) {
  sum += num;
}

const mean = sum / numbers.length;

console.log(mean); // Output: 3
