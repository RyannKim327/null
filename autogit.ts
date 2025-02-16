let str: string = "123";
let num: number = parseInt(str, 10); // The second argument is the radix (base)
let str: string = "123";
let num: number = +str;
let str: string = "123";
let num: number = Number(str);
let str: string = "123.45";
let num: number = Math.floor(Number(str));
if (!isNaN(num)) {
    // num is a valid number
}
