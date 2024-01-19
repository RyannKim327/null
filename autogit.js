function reverseWords(str) {
  // Split the string into an array of words
  const words = str.split(' ');

  // Reverse the order of the words
  const reversedWords = words.reverse();

  // Join the reversed words back into a string
  const reversedString = reversedWords.join(' ');

  return reversedString;
}

// Example usage
const originalString = "Hello, world! How are you?";
const reversedString = reverseWords(originalString);
console.log(reversedString); // Output: "you? are How world! Hello,"
