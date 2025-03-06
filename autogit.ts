function reverseWords(str: string): string {
  // Split the string into an array of words
  const words = str.split(' ');

  // Reverse the order of the words
  const reversedWords = words.reverse();

  // Join the reversed words back into a string
  const reversedStr = reversedWords.join(' ');

  return reversedStr;
}

// Example usage
const originalString = "The quick brown fox jumps over the lazy dog.";
const reversedString = reverseWords(originalString);
console.log(reversedString); // Output: "dog. lazy the over jumps fox brown quick The"
