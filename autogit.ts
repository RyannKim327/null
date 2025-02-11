const numbers: number[] = [1, 5, 3, 7, 2];

const maxValue: number = Math.max(...numbers);

console.log(maxValue); // Output: 7
const numbers: number[] = [1, 5, 3, 7, 2];

let maxValue: number = numbers[0]; // Initialize with the first element

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxValue) {
        maxValue = numbers[i];
    }
}

console.log(maxValue); // Output: 7
const numbers: number[] = [1, 5, 3, 7, 2];

const maxValue: number = numbers.reduce((acc, curr) => Math.max(acc, curr), numbers[0]);

console.log(maxValue); // Output: 7
