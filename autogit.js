function reverseStringWords(str) {
  // Split the string into an array of words
  const words = str.split(" ");
  
  // Reverse the array
  const reversedWords = words.reverse();
  
  // Join the reversed array elements into a string
  const reversedString = reversedWords.join(" ");
  
  return reversedString;
}

// Example usage
const originalString = "Hello World!";
const reversedString = reverseStringWords(originalString);
console.log(reversedString); // Output: "World! Hello"
