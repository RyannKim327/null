const numbers = [3, 7, 2, 9, 4];

const maxValue = Math.max(...numbers);

console.log(maxValue); // Output: 9
const numbers: number[] = [];

const maxValue = numbers.length > 0 ? Math.max(...numbers) : undefined;

console.log(maxValue); // Output: undefined if array is empty
const maxValue = numbers.reduce((max, current) => (current > max ? current : max), -Infinity);
console.log(maxValue); // Output: 9
