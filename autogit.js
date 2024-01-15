let str = "  Hello,    World!   ";

// Method 1: Using regular expression
let trimmedStr = str.replace(/\s+/g, '');
console.log(trimmedStr); // Output: "Hello,World!"

// Method 2: Using trim() and replace() together
let trimmedStr2 = str.trim().replace(/\s+/g, '');
console.log(trimmedStr2); // Output: "Hello,World!"

// Method 3: Using split() and join() together
let trimmedStr3 = str.split(' ').join('');
console.log(trimmedStr3); // Output: "Hello,World!"
