function reverseStringWords(str) {
  // Step 1: Split the string into an array of words
  let wordsArray = str.split(" ");

  // Step 2: Reverse the order of the array
  wordsArray.reverse();

  // Step 3: Join the array of words back into a single string
  let reversedString = wordsArray.join(" ");

  // Return the reversed string
  return reversedString;
}

// Example usage
let originalString = "Hello world, how are you?";
let reversedString = reverseStringWords(originalString);

console.log(reversedString); // Output: "you? are how world, Hello"
