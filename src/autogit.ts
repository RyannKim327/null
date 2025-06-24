const str = "42";
const num = parseInt(str, 10); // Converts "42" to the number 42
console.log(num); // Output: 42
const str = "42";
const num = Number(str); // Converts "42" to the number 42
console.log(num); // Output: 42
const str = "42";
const num = +str; // Converts "42" to the number 42
console.log(num); // Output: 42
const str = "42.7";
const num = Math.floor(Number(str)); // Converts "42.7" to 42
console.log(num); // Output: 42
function toInteger(str: string): number | null {
    const num = parseInt(str, 10);
    return isNaN(num) ? null : num;
}

console.log(toInteger("42"));    // Output: 42
console.log(toInteger("abc"));   // Output: null
