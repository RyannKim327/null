const numbers: number[] = [1, 5, 3, 9, 2];
const maxValue = Math.max(...numbers);
console.log(maxValue); // Output: 9
const numbers: number[] = [1, 5, 3, 9, 2];
const maxValue = numbers.reduce((max, current) => (current > max ? current : max), numbers[0]);
console.log(maxValue); // Output: 9
const numbers: number[] = [1, 5, 3, 9, 2];

let maxValue = numbers[0]; // Assume the first element is the max initially

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxValue) {
        maxValue = numbers[i];
    }
}

console.log(maxValue); // Output: 9
