let str = "   Hello    World    ";

// Using regular expression to remove whitespaces
let trimmedStr = str.replace(/\s/g, '');

console.log(trimmedStr); // Output: "HelloWorld"
