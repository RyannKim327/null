function reverseWords(str) {
  // Step 1: Split the string into an array of words
  let wordsArray = str.split(" ");

  // Step 2: Reverse the array
  let reversedArray = wordsArray.reverse();

  // Step 3: Join the reversed array into a string
  let reversedString = reversedArray.join(" ");

  return reversedString;
}

// Example usage
let sentence = "Hello, how are you?";
let reversedSentence = reverseWords(sentence);
console.log(reversedSentence);
