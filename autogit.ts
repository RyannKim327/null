const originalString = "Hello World";
const reversedString = originalString.split(" ").reverse().join(" ");
console.log(reversedString); // Output: "World Hello"
const originalString = "Hello,World";
const reversedString = originalString.split(/\s*,\s*/).reverse().join(" ");
console.log(reversedString); // Output: "World Hello"
const originalString = "Hello World";
const words = originalString.split(" ");
const reversedWords = [...words].reverse();
const reversedString = reversedWords.join(" ");
console.log(reversedString); // Output: "World Hello"
