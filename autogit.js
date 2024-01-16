function reverseWords(string) {
  // Step 1: Split the string into an array of words
  const wordsArray = string.split(' ');

  // Step 2: Reverse the array
  const reversedArray = wordsArray.reverse();

  // Step 3: Join the array back into a string
  const reversedString = reversedArray.join(' ');

  return reversedString;
}

// Example Usage
const originalString = "Hello world! I am coding in JavaScript!";
const reversedString = reverseWords(originalString);
console.log(reversedString);
JavaScript! in coding am I world! Hello
