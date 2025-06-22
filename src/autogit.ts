const str = "42";
const num = parseInt(str, 10); // Converts the string "42" to the integer 42
console.log(num); // Output: 42
const str = "42";
const num = Number(str); // Converts the string "42" to the number 42
console.log(num); // Output: 42
const str = "42";
const num = +str; // Converts the string "42" to the number 42
console.log(num); // Output: 42
const str = "42.7";
const num = Math.floor(Number(str)); // Converts "42.7" to 42
console.log(num); // Output: 42

// Alternatively, using Math.trunc():
const numTrunc = Math.trunc(Number(str)); // Converts "42.7" to 42
console.log(numTrunc); // Output: 42
const str = "42abc";
const num = parseInt(str, 10);

if (isNaN(num)) {
  console.log("Invalid number");
} else {
  console.log(num); // Output: 42
}
