function countOccurrences(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

// Example Usage
const sentence = "Hello, world!";
const character = "o";
const occurrences = countOccurrences(sentence, character);
console.log(`The character '${character}' occurs ${occurrences} times.`);
