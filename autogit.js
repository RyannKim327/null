function reverseWords(str) {
  // Step 1: Split the string into an array of words
  let words = str.split(" ");

  // Step 2: Reverse the array
  words = words.reverse();

  // Step 3: Join the array elements back into a string
  let reversedStr = words.join(" ");
  
  return reversedStr;
}

// Example usage
let sentence = "Hello, how are you?";
let reversedSentence = reverseWords(sentence);
console.log(reversedSentence);
you? are how Hello, 
