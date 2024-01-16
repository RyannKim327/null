function reverseWords(str) {
  // Step 1: Split the string into an array of words
  let words = str.split(" ");

  // Step 2: Reverse the order of the array
  words.reverse();

  // Step 3: Join the reversed array back into a string
  let reversedString = words.join(" ");

  return reversedString;
}

// Example usage:
let sentence = "Hello, how are you?";
let reversedSentence = reverseWords(sentence);
console.log(reversedSentence); // Output: "you? are how Hello,"
