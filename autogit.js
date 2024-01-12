const words = str.split(" ");
const reversedWords = words.reverse();
const reversedString = reversedWords.join(" ");
function reverseStringOrder(str) {
  const words = str.split(" ");
  const reversedWords = words.reverse();
  const reversedString = reversedWords.join(" ");
  return reversedString;
}

const originalString = "Hello, how are you?";
const reversedString = reverseStringOrder(originalString);
console.log(reversedString);  // Output: you? are how Hello,
