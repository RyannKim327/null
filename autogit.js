const str = "Hello World";
const withoutSpaces = str.replace(/\s/g, "");

console.log(withoutSpaces); // Output: "HelloWorld"
const str = "Hello World";
const withoutSpaces = str.split(" ").join("");

console.log(withoutSpaces); // Output: "HelloWorld"
const str = "Hello World";
let withoutSpaces = "";

for (let i = 0; i < str.length; i++) {
  if (str[i] !== " ") {
    withoutSpaces += str[i];
  }
}

console.log(withoutSpaces); // Output: "HelloWorld"
