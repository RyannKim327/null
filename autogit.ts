const numbers: number[] = [1, 5, 3, 9, 2];
const max = Math.max(...numbers);
console.log(max); // Output: 9
const numbers: number[] = [1, 5, 3, 9, 2];
const max = numbers.reduce((accumulator, currentValue) => {
    return Math.max(accumulator, currentValue);
}, numbers[0]); // Initial value is the first element
console.log(max); // Output: 9
const numbers: number[] = [1, 5, 3, 9, 2];
let max = numbers[0]; // Initialize with the first element

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

console.log(max); // Output: 9
