let str = "Hello, world!";
let withoutSpaces = str.replace(/\s/g, "");
console.log(withoutSpaces); // Output: "Hello,world!"
let str = "Hello, world!";
let withoutSpaces = str.split(" ").join("");
console.log(withoutSpaces); // Output: "Hello,world!"
let str = "Hello, world!";
let withoutSpaces = "";
for (let i = 0; i < str.length; i++) {
  if (str[i] !== " ") {
    withoutSpaces += str[i];
  }
}
console.log(withoutSpaces); // Output: "Hello,world!"
