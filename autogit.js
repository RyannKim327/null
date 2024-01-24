function reverseWords(str) {
  // Step 1: Split the string into an array of words
  let words = str.split(" ");

  // Step 2: Reverse the order of the array
  words.reverse();

  // Step 3: Join the array back into a string
  let reversedStr = words.join(" ");

  return reversedStr;
}

// Example usage
let originalStr = "Hello, how are you?";
let reversedStr = reverseWords(originalStr);
console.log(reversedStr); // Output: "you? are how Hello,"
