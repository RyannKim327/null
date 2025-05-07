const numbers: number[] = [1, 2, 3, 4, 5, 10, 2, 8];
const maxValue: number = Math.max(...numbers);
console.log(maxValue); // Output: 10
const numbers: number[] = [1, 2, 3, 4, 5, 10, 2, 8];

let maxValue: number = numbers[0]; // Assume first element is the max initially
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxValue) {
        maxValue = numbers[i];
    }
}

console.log(maxValue); // Output: 10
const numbers: number[] = [1, 2, 3, 4, 5, 10, 2, 8];

const maxValue: number = numbers.reduce((acc, curr) => Math.max(acc, curr), numbers[0]);
console.log(maxValue); // Output: 10
const numbers: number[] = [];

if (numbers.length === 0) {
    console.log("Array is empty");
} else {
    const maxValue: number = Math.max(...numbers);
    console.log(maxValue);
}
