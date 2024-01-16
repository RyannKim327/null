function countOccurrences(word, str) {
  const regex = new RegExp(word, 'g');
  const matches = str.match(regex);
  return matches ? matches.length : 0;
}

// Example usage:
const string = 'JavaScript is a popular programming language. JavaScript is versatile.';
const word = 'JavaScript';
const count = countOccurrences(word, string);
console.log(count); // Output: 2
function countOccurrences(word, str) {
  const words = str.split(' ');
  let count = 0;
  
  for (let i = 0; i < words.length; i++) {
    if (words[i] === word) {
      count++;
    }
  }
  
  return count;
}

// Example usage:
const string = 'JavaScript is a popular programming language. JavaScript is versatile.';
const word = 'JavaScript';
const count = countOccurrences(word, string);
console.log(count); // Output: 2
