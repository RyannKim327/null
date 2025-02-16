const str: string = "123";
const num: number = parseInt(str, 10); // Using base 10
console.log(num); // Output: 123
const str: string = "123";
const num: number = Number(str);
console.log(num); // Output: 123
const str: string = "123";
const num: number = +str;
console.log(num); // Output: 123
const str: string = "123.45";
const num: number = Math.floor(+str);
console.log(num); // Output: 123
