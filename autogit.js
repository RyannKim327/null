let str = "  Hello, World!  ";

// Remove leading and trailing whitespace
str = str.trim();

// Remove all whitespace
str = str.replace(/\s/g, "");

console.log(str); // Output: "Hello,World!"
