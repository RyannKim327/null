function countOccurrences(string, word) {
  const regex = new RegExp(word, 'g');
  const matches = string.match(regex);
  return matches ? matches.length : 0;
}

const sentence = 'How much wood would a woodchuck chuck if a woodchuck could chuck wood?';
const word = 'wood';
console.log(countOccurrences(sentence, word)); // Output: 2
function countOccurrences(string, word) {
  const wordsArray = string.split(' ');
  let count = 0;
  for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i] === word) {
      count++;
    }
  }
  return count;
}

const sentence = 'How much wood would a woodchuck chuck if a woodchuck could chuck wood?';
const word = 'wood';
console.log(countOccurrences(sentence, word)); // Output: 2
function countOccurrences(string, word) {
  const wordsArray = string.split(' ');
  return wordsArray.reduce((count, currentWord) => {
    return count + (currentWord === word ? 1 : 0);
  }, 0);
}

const sentence = 'How much wood would a woodchuck chuck if a woodchuck could chuck wood?';
const word = 'wood';
console.log(countOccurrences(sentence, word)); // Output: 2
