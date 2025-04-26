const str: string = "123";
const num: number = parseInt(str, 10);
console.log(num); // Output: 123
const str: string = "123";
const num: number = Number(str);
console.log(num); // Output: 123
const str: string = "123";
const num: number = +str;
console.log(num); // Output: 123
const str: string = "123.45";
const num: number = Math.floor(Number(str));
console.log(num); // Output: 123
const str: string = "abc"; // Invalid number
const num: number = parseInt(str, 10);

if (isNaN(num)) {
    console.log("The string is not a valid number.");
} else {
    console.log(num);
}
