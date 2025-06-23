const str: string = "123";
const num: number = parseInt(str, 10); // 123
console.log(num); // Output: 123
const str: string = "123";
const num: number = Number(str); // 123
console.log(num); // Output: 123

// Example with invalid input
const invalidStr: string = "123abc";
const invalidNum: number = Number(invalidStr); // NaN
console.log(invalidNum); // Output: NaN
const str: string = "123";
const num: number = +str; // 123
console.log(num); // Output: 123

// Example with invalid input
const invalidStr: string = "123abc";
const invalidNum: number = +invalidStr; // NaN
console.log(invalidNum); // Output: NaN
const str: string = "123.75";
const num: number = Math.floor(Number(str)); // 123
console.log(num); // Output: 123

const roundedNum: number = Math.round(Number(str)); // 124
console.log(roundedNum); // Output: 124
const str: string = "123.75";
const num: number = Number(str) | 0; // 123
console.log(num); // Output: 123
const str: string = "123";

// Using parseInt()
const num1: number = parseInt(str, 10);

// Using Number()
const num2: number = Number(str);

// Using unary plus
const num3: number = +str;

console.log(num1, num2, num3); // Output: 123 123 123
const str: string = "123";
const num: number = parseInt(str, 10); // or Number(str), or +str
console.log(num); // Output: 123
