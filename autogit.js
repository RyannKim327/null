function countOccurrences(string, word) {
  const regex = new RegExp(word, 'gi'); // 'gi' stands for global and case-insensitive matching
  const matches = string.match(regex);
  
  return matches ? matches.length : 0;
}

const myString = 'I have a string and I want to count how many times the word string appears.';
const myWord = 'string';
const count = countOccurrences(myString, myWord);

console.log(`The word "${myWord}" appears ${count} time(s) in the string.`);
