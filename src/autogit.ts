const str = "42";
const num = parseInt(str, 10); // Convert to integer with base 10
console.log(num); // Output: 42
console.log(typeof num); // Output: "number"
const str = "42";
const num = Number(str); // Convert to a number
console.log(num); // Output: 42
console.log(typeof num); // Output: "number"
const str = "42";
const num = +str; // Convert to a number
console.log(num); // Output: 42
console.log(typeof num); // Output: "number"
const str = "42.7";
const num = Math.floor(Number(str)); // Convert to integer by flooring
console.log(num); // Output: 42
console.log(typeof num); // Output: "number"
function toInteger(str: string): number | null {
    const num = parseInt(str, 10);
    return isNaN(num) ? null : num;
}

console.log(toInteger("42")); // Output: 42
console.log(toInteger("abc")); // Output: null
