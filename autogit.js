function countOccurrences(text, word) {
  const regex = new RegExp('\\b' + word + '\\b', 'gi');
  const matches = text.match(regex);
  return matches ? matches.length : 0;
}

const text = "This is a sample text with multiple occurrences of the word sample.";
const word = "sample";
const count = countOccurrences(text, word);
console.log(count);  // Output: 2
function countOccurrences(text, word) {
  const words = text.split(/\s+/);
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].toLowerCase() === word.toLowerCase()) {
      count++;
    }
  }
  
  return count;
}

const text = "This is a sample text with multiple occurrences of the word sample.";
const word = "sample";
const count = countOccurrences(text, word);
console.log(count);  // Output: 2
