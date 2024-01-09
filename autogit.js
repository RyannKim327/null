function countOccurrences(str, word) {
  // Split the string into an array of words
  const wordsArray = str.split(" ");

  // Initialize a counter to keep track of occurrences
  let count = 0;

  // Loop through each word in the array
  for (let i = 0; i < wordsArray.length; i++) {
    // If the word matches the desired word, increment the count
    if (wordsArray[i] === word) {
      count++;
    }
  }

  // Return the final count
  return count;
}

// Usage example
const sentence = "This is a sample sentence. This sentence is just an example.";
const wordToFind = "sentence";
const occurrences = countOccurrences(sentence, wordToFind);
console.log(`The word "${wordToFind}" occurs ${occurrences} times.`);
