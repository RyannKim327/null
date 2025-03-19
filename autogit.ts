const numbers: number[] = [1, 5, 3, 9, 2];
const maxValue: number = Math.max(...numbers);
console.log(maxValue); // Output: 9
const numbers: number[] = [1, 5, 3, 9, 2];

let maxValue: number = numbers[0]; // Assume the first element is the max initially

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxValue) {
        maxValue = numbers[i];
    }
}

console.log(maxValue); // Output: 9
const numbers: number[] = [1, 5, 3, 9, 2];

const maxValue: number = numbers.reduce((acc, curr) => {
    return curr > acc ? curr : acc;
}, numbers[0]);

console.log(maxValue); // Output: 9
