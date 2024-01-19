const str = "Hello World";
const words = str.split(" ");
const reversedWords = words.reverse();
const reversedString = reversedWords.join(" ");
function reverseStringWords(str) {
  const words = str.split(" ");
  const reversedWords = words.reverse();
  const reversedString = reversedWords.join(" ");
  return reversedString;
}

const inputString = "Hello World";
const result = reverseStringWords(inputString);
console.log(result); // Output: "World Hello"
