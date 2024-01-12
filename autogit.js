function reverseWords(str) {
  // Split the string into an array of words
  const wordsArray = str.split(" ");

  // Reverse the order of the array
  const reversedArray = wordsArray.reverse();

  // Join the reversed array back into a string
  const reversedString = reversedArray.join(" ");

  return reversedString;
}

// Example usage
const originalString = "Hello, world! This is a test.";
const reversedString = reverseWords(originalString);
console.log(reversedString); // Output: "test. a is This world! Hello,"
