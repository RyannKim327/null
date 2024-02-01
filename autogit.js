const countOccurrences = (str, word) => {
  const regex = new RegExp(word, 'gi');
  const matches = str.match(regex);
  
  return matches ? matches.length : 0;
};

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam aliquet mi nec pharetra. In non metus lorem.';
const wordToCount = 'lorem';

const occurrences = countOccurrences(text, wordToCount);
console.log(`The word "${wordToCount}" occurs ${occurrences} times.`);
