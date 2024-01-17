function countOccurrences(string, word) {
   const regex = new RegExp(word, 'g');
   const matches = string.match(regex);

   if (matches) {
      return matches.length;
   } else {
      return 0;
   }
}

// Example usage:
const sentence = "The quick brown fox jumps over the lazy dog";

const wordCount = countOccurrences(sentence, "the");
console.log(wordCount); // Output: 2
