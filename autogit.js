function countOccurrences(str, word) {
  // Use regex to create a dynamic word pattern
  const regex = new RegExp(`\\b${word}\\b`, 'gi');
  
  // Use match() to find all matches and return the count
  const matches = str.match(regex);
  return matches ? matches.length : 0;
}

// Example usage
const string = 'Lorem ipsum dolor ipsum sit amet, consectetur adipiscing ipsum elit.';
const word = 'ipsum';

const count = countOccurrences(string, word);
console.log(`The word "${word}" occurs ${count} times in the string.`);
