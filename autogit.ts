const numbers: number[] = [3, 7, 2, 9, 5];
const max = Math.max(...numbers);
console.log(max);  // Output: 9
const numbers: number[] = [];
const max = numbers.length > 0 ? Math.max(...numbers) : undefined;
console.log(max);  // Output: undefined
const numbers: number[] = [3, 7, 2, 9, 5];
const max = numbers.reduce((a, b) => (a > b ? a : b), -Infinity);
console.log(max);  // Output: 9
