const str: string = "42";
const num: number = parseInt(str, 10); // Radix 10 for decimal numbers
console.log(num); // Output: 42
const str: string = "42";
const num: number = +str;
console.log(num); // Output: 42
const str: string = "42";
const num: number = Number(str);
console.log(num); // Output: 42
const str: string = "42.7";
const num: number = Math.floor(Number(str)); // Rounds down to the nearest integer
console.log(num); // Output: 42
function safeParseInt(str: string): number | null {
  const num = parseInt(str, 10);
  return isNaN(num) ? null : num;
}

console.log(safeParseInt("42"));    // Output: 42
console.log(safeParseInt("abc"));   // Output: null
console.log(safeParseInt("42px"));  // Output: 42
const num = parseInt(str, 10);
