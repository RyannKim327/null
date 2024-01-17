let str = "Hello, World! This is a string with spaces.";

// Using a regular expression to replace all spaces with an empty string
let newStr = str.replace(/\s/g, '');

console.log(newStr); // Output: "Hello,World!Thisisastringwithspaces."
let str = "Hello, World! This is a string with spaces.";

// Split the string into an array of substrings using spaces as separators,
// then join the substrings without any separator
let newStr = str.split(' ').join('');

console.log(newStr); // Output: "Hello,World!Thisisastringwithspaces."
let str = "Hello, World! This is a string with spaces.";

let newStr = '';
for (let i = 0; i < str.length; i++) {
  if (str[i] !== ' ') {
    newStr += str[i];
  }
}

console.log(newStr); // Output: "Hello,World!Thisisastringwithspaces."
