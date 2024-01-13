let str = "  Hello,   World!  \n";

// Remove all whitespace
str = str.replace(/\s/g, "");

console.log(str); // Output: "Hello,World!"
let str = "  Hello,   World!  \n";

// Remove leading and trailing whitespace
str = str.trim().replace(/\s+/g, " ");

console.log(str); // Output: "Hello, World!"
