let str = "   Hello,  world!   ";

// Remove leading and trailing whitespace
str = str.trim();

// Remove all whitespace in the string
str = str.replace(/\s/g, "");

console.log(str); // Output: "Hello,world!"
