function reverseWords(str) {
  // Step 1: Split the string into an array of words
  const wordsArray = str.split(' ');

  // Step 2: Reverse the order of the array
  const reversedArray = wordsArray.reverse();

  // Step 3: Join the array back into a string
  const reversedString = reversedArray.join(' ');

  return reversedString;
}

// Usage example
const originalString = 'Hello World! How are you?';
const reversedString = reverseWords(originalString);
console.log(reversedString); // Outputs: "you? are How World! Hello"
