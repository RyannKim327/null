function countCharOccurrences(string, char) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      count++;
    }
  }
  return count;
}

// Example usage
const sentence = "Hello, World!";
const charToCount = "o";
const occurrences = countCharOccurrences(sentence, charToCount);
console.log(`The character "${charToCount}" appears ${occurrences} times in the sentence.`);
