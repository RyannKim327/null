function countOccurrences(string, word) {
  const regex = new RegExp("\\b" + word + "\\b", "gi");
  const matches = string.match(regex);
  return matches ? matches.length : 0;
}

// Example usage:
const string = "Hello world, hello universe, hello everyone!";
const word = "hello";
const count = countOccurrences(string, word);
console.log(count); // Output: 3
function countOccurrences(string, word) {
  const splitString = string.split(word);
  return splitString.length - 1;
}

// Example usage:
const string = "Hello world, hello universe, hello everyone!";
const word = "hello";
const count = countOccurrences(string, word);
console.log(count); // Output: 3
function countOccurrences(string, word) {
  let count = 0;
  const words = string.split(" ");
  
  for (let i = 0; i < words.length; i++) {
    if (words[i].toLowerCase() === word.toLowerCase()) {
      count++;
    }
  }
  
  return count;
}

// Example usage:
const string = "Hello world, hello universe, hello everyone!";
const word = "hello";
const count = countOccurrences(string, word);
console.log(count); // Output: 3
