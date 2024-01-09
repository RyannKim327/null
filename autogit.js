function countOccurrences(string, word) {
  const regex = new RegExp('\\b' + word + '\\b', 'gi');
  const matches = string.match(regex);
  return matches ? matches.length : 0;
}

// Example usage:
const text = 'How much wood would a woodchuck chuck if a woodchuck could chuck wood?';
const wordToCount = 'wood';
const occurrences = countOccurrences(text, wordToCount);
console.log(occurrences); // Output: 2
function countOccurrences(string, word) {
  const words = string.split(' ');
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i] === word) {
      count++;
    }
  }
  return count;
}

// Example usage:
const text = 'How much wood would a woodchuck chuck if a woodchuck could chuck wood?';
const wordToCount = 'wood';
const occurrences = countOccurrences(text, wordToCount);
console.log(occurrences); // Output: 2
