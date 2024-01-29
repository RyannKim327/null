function reverseWords(str) {
  // Step 1: Split the string into an array
  const words = str.split(" ");

  // Step 2: Reverse the order of the array
  const reversedWords = words.reverse();

  // Step 3: Join the array elements into a string
  const reversedString = reversedWords.join(" ");

  return reversedString;
}

// Example usage
const inputString = "Hello World, how are you?";
const reversedString = reverseWords(inputString);

console.log(reversedString);
// Output: "you? are how World, Hello"
