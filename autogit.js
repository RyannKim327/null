function reverseWords(str) {
  // Step 1: Split the string into an array of words
  const words = str.split(' ');

  // Step 2: Reverse the order of array elements
  const reversedWords = words.reverse();

  // Step 3: Join the reversed array into a string
  const reversedStr = reversedWords.join(' ');

  return reversedStr;
}

// Example usage
const input = 'Hello World! How are you?';
const reversedString = reverseWords(input);
console.log(reversedString);  // Output: you? are How World! Hello
