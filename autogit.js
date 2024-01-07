function countOccurrences(str, word) {
  const regex = new RegExp("\\b" + word + "\\b", "gi");
  const matches = str.match(regex);

  if (matches) {
    return matches.length;
  }

  return 0;
}

// Example usage
const text = "I have a cat. My cat's name is Whiskers. The cat is very cute.";
const wordToCount = "cat";

const occurrenceCount = countOccurrences(text, wordToCount);
console.log(`The word "${wordToCount}" occurs ${occurrenceCount} times.`);
