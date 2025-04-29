const numbers = [3, 7, 2, 9, 5]; 
const max = Math.max(...numbers);
console.log(max);  // Output: 9
const numbers: number[] = [];
const max = numbers.length ? Math.max(...numbers) : undefined;
console.log(max);  // Output: undefined
const numbers = [3, 7, 2, 9, 5];
const max = numbers.reduce((acc, curr) => (curr > acc ? curr : acc), numbers[0]);
console.log(max);  // Output: 9
