let str = "Hello world!";
let newStr = str.replace(/\s/g, "");
console.log(newStr);
let str = "Hello world!";
let newStr = str.split(" ").join("");
console.log(newStr);
Helloworld!
let str = "  Hello world!  ";
let newStr = str.trim().replace(/\s/g, "");
console.log(newStr);
Helloworld!
