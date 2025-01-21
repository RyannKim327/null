const originalString = "Hello World TypeScript";

const reversedString = originalString.split(" ").reverse().join(" ");

console.log(reversedString); // Output: "TypeScript World Hello"
const reversedString = [...originalString.split(" ")].reverse().join(" ");
