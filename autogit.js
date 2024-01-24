function countOccurrences(string, character) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === character) {
      count++;
    }
  }
  return count;
}

// Example usage
const str = "Hello, world!";
const char = "o";
const occurrences = countOccurrences(str, char);
console.log(`The character "${char}" appears ${occurrences} times in the string "${str}".`);
