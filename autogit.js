function reverseStringWords(str) {
  // Step 1: Split string into an array of words
  const wordsArray = str.split(" ");

  // Step 2: Reverse the order of the words
  const reversedArray = wordsArray.reverse();

  // Step 3: Join the words back into a string
  const reversedString = reversedArray.join(" ");

  // Return the reversed string
  return reversedString;
}

// Example usage
const inputString = "Hello World! This is a test.";
const reversedString = reverseStringWords(inputString);
console.log(reversedString);
test. a is This World! Hello
