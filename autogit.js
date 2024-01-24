let str = "Hello, world! How are you?";
let result = str.replace(/\s+/g, "");
console.log(result);  // Output: "Hello,world!Howareyou?"
let str = "Hello, world! How are you?";
let result = str.split(" ").join("");
console.log(result);  // Output: "Hello,world!Howareyou?"
let str = "Hello, world! How are you?";
let result = "";
for (let i = 0; i < str.length; i++) {
  if (str[i] !== " ") {
    result += str[i];
  }
}
console.log(result);  // Output: "Hello,world!Howareyou?"
