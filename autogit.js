function reverseWords(str) {
  // Step 1: Split the string into an array of words
  const wordsArray = str.split(" ");

  // Step 2: Reverse the array
  const reversedArray = wordsArray.reverse();

  // Step 3: Join the reversed array back into a string
  const reversedString = reversedArray.join(" ");

  // Return the reversed string
  return reversedString;
}

// Example usage
const originalString = "Hello, how are you?";
const reversedString = reverseWords(originalString);
console.log(reversedString); // Output: "you? are how Hello,"
