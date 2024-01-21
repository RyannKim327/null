function reverseWords(str) {
  // Step 1: Split the string into an array of words
  const wordsArray = str.split(' ');

  // Step 2: Reverse the order of the array
  const reversedArray = wordsArray.reverse();

  // Step 3: Join the elements of the reversed array into a new string
  const reversedString = reversedArray.join(' ');

  return reversedString;
}

// Usage example
const sentence = "Hello, how are you?";
const reversedSentence = reverseWords(sentence);
console.log(reversedSentence);
you? are how Hello, 
