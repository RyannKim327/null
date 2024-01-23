function countOccurrences(str, word) {
  // Split the string by spaces
  const words = str.split(" ");
  
  // Initialize a count variable
  let count = 0;
  
  // Iterate through each word
  for (let i = 0; i < words.length; i++) {
    // If the word matches, increment the count
    if (words[i].toLowerCase() === word.toLowerCase()) {
      count++;
    }
  }
  
  return count;
}

// Example usage
const sentence = "The cat and the hat sat on the mat.";
const word = "the";
const occurrences = countOccurrences(sentence, word);
console.log("The word '" + word + "' occurs " + occurrences + " times.");
