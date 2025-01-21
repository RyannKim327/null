let str = "hello world this is a test";
let reversedStr = str.split(" ").reverse().join(" ");
console.log(reversedStr); // Output: "test a is this world hello"
let str = "hello world this is a test";
let reversedStr = [...str.split(" ")].reverse().join(" ");
console.log(reversedStr); // Output: "test a is this world hello"
