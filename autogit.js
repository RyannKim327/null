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
const str = "Hello, world!";
const char = "o";
console.log(countOccurrences(str, char)); // Output: 2
function countOccurrences(string, character) {
  return string.split(character).length - 1;
}

// Example usage
const str = "Hello, world!";
const char = "o";
console.log(countOccurrences(str, char)); // Output: 2
function countOccurrences(string, character) {
  const regex = new RegExp(character, "g");
  return (string.match(regex) || []).length;
}

// Example usage
const str = "Hello, world!";
const char = "o";
console.log(countOccurrences(str, char)); // Output: 2
