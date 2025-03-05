let str: string = "123";
let num: number = parseInt(str, 10);

console.log(num);  // Output: 123
let str: string = "123";
let num: number = +str;

console.log(num);  // Output: 123
let str: string = "123";
let num: number = Number(str);

console.log(num);  // Output: 123
let str: string = "123.45";
let num: number = Math.floor(Number(str));

console.log(num);  // Output: 123
let str: string = "abc";
let num: number = parseInt(str, 10);

if (isNaN(num)) {
    console.log("The string does not contain a valid number.");
} else {
    console.log(num);
}
