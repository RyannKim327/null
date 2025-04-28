const str = "42";
const num = parseInt(str, 10); // 10 for decimal base
console.log(num); // 42
const str = "42";
const num = +str; // converts string to number
console.log(num); // 42
const str = "42";
const num = Number(str);
console.log(num); // 42
const str = "42.7";
const num = Math.floor(Number(str)); // 42
if (isNaN(num)) {
  // handle invalid input
}
