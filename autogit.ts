let str: string = "123";
let num: number = parseInt(str, 10); // The second argument is the radix (base) to use
console.log(num); // Output: 123
let str: string = "123";
let num: number = +str;
console.log(num); // Output: 123
let str: string = "123";
let num: number = Number(str);
console.log(num); // Output: 123
let str: string = "123";
let num: number = Number.parseInt(str, 10);
console.log(num); // Output: 123
let str: string = "abc"; // Non-numeric string
let num: number = parseInt(str, 10);

if (isNaN(num)) {
    console.log("The string cannot be converted to a number.");
} else {
    console.log(num);
}
