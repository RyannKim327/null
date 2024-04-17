let str = "  Hello,   World!  ";

// Using regular expression to remove whitespace
let newStr = str.replace(/\s/g, '');

console.log(newStr); // Output: "Hello,World!"
