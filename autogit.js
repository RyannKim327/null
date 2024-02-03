function reverseWords(str) {
  // Step 1: Split the string into an array of words
  const wordsArray = str.split(' ');

  // Step 2: Reverse the order of words in the array
  const reversedArray = wordsArray.reverse();

  // Step 3: Join the array elements back into a string
  const reversedString = reversedArray.join(' ');

  return reversedString;
}

// Example usage
const originalString = "Hello, world! How are you?";
const reversedString = reverseWords(originalString);
console.log(reversedString);
