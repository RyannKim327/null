function reverseStringWords(str) {
  // Step 1: Split string into an array of words
  const wordsArray = str.split(' ');

  // Step 2: Reverse the array
  const reversedArray = wordsArray.reverse();

  // Step 3: Join the reversed array into a string
  const reversedString = reversedArray.join(' ');

  return reversedString;
}

// Example usage
const originalString = "Hello world, how are you?";
const reversedString = reverseStringWords(originalString);

console.log(reversedString); // Output: "you? are how world, Hello"
