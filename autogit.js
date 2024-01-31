function countOccurrences(str, word) {
  return str.split(word).length - 1;
}

const sentence = "The quick brown fox jumps over the lazy dog";
const word = "the";
const count = countOccurrences(sentence.toLowerCase(), word.toLowerCase());
console.log(count); // Output: 2
function countOccurrences(str, word) {
  const regex = new RegExp("\\b" + word + "\\b", "gi");
  const matches = str.match(regex);
  return matches ? matches.length : 0;
}

const sentence = "The quick brown fox jumps over the lazy dog";
const word = "the";
const count = countOccurrences(sentence, word);
console.log(count); // Output: 2
function countOccurrences(str, word) {
  const regex = new RegExp("\\b" + word + "\\b", "gi");
  const matches = str.split(regex);
  return matches.length - 1;
}

const sentence = "The quick brown fox jumps over the lazy dog";
const word = "the";
const count = countOccurrences(sentence, word);
console.log(count); // Output: 2
