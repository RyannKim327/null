let str = "hello world";
let reversedStr = str.split(" ").reverse().join(" ");
console.log(reversedStr); // Output: "world hello"
let str = "hello,world";
let reversedStr = str.split(/\s*,/).reverse().join(" ");
console.log(reversedStr); // Output: "world hello"
let str = "   hello world   ";
let reversedStr = str.trim().split(" ").reverse().join(" ");
console.log(reversedStr); // Output: "world hello"
