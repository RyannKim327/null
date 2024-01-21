function countOccurrence(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      count++;
    }
  }
  return count;
}

// Example usage
const text = "Hello, world!";
const charToCount = "o";
const occurrenceCount = countOccurrence(text, charToCount);
console.log(`The character "${charToCount}" occurs ${occurrenceCount} times.`);
