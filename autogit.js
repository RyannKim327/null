function countOccurrencesUsingRegex(word, string) {
  const regex = new RegExp(word, 'gi'); // 'gi' indicates a global and case-insensitive search
  const matches = string.match(regex);
  return matches ? matches.length : 0;
}

const sentence = "How much wood would a woodchuck chuck if a woodchuck could chuck wood?";
const word = "wood";

const count = countOccurrencesUsingRegex(word, sentence);
console.log(`The word "${word}" occurs ${count} times.`);
function countOccurrencesUsingStringMethods(word, string) {
  // Split the string into an array of words
  const words = string.split(' ');

  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].toLowerCase() === word.toLowerCase()) { // Perform a case-insensitive comparison
      count++;
    }
  }

  return count;
}

const sentence = "How much wood would a woodchuck chuck if a woodchuck could chuck wood?";
const word = "wood";

const count = countOccurrencesUsingStringMethods(word, sentence);
console.log(`The word "${word}" occurs ${count} times.`);
The word "wood" occurs 2 times.
