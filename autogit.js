function reverseWords(str) {
  // Step 1: Split the string into an array of words
  let words = str.split(' ');

  // Step 2: Reverse the order of the words array
  words = words.reverse();

  // Step 3: Join the elements of the array back into a string
  let reversedStr = words.join(' ');

  return reversedStr;
}

// Example usage
const originalStr = "Hello World! I am learning JavaScript";
const reversedStr = reverseWords(originalStr);
console.log(reversedStr); // Output: "JavaScript learning am I World! Hello"
