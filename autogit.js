function countOccurrences(string, character) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) === character) {
      count++;
    }
  }
  return count;
}

// Example usage
const str = "Hello, World!";
const char = "o";
const occurrences = countOccurrences(str, char);
console.log(`The character "${char}" occurs ${occurrences} times in "${str}".`);
function countOccurrences(string, character) {
  return string.split(character).length - 1;
}

// Example usage
const str = "Hello, World!";
const char = "o";
const occurrences = countOccurrences(str, char);
console.log(`The character "${char}" occurs ${occurrences} times in "${str}".`);
function countOccurrences(string, character) {
  const regex = new RegExp(character, 'g');
  const matches = string.match(regex);
  return matches ? matches.length : 0;
}

// Example usage
const str = "Hello, World!";
const char = "o";
const occurrences = countOccurrences(str, char);
console.log(`The character "${char}" occurs ${occurrences} times in "${str}".`);
