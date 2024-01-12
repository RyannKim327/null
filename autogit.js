function countOccurrences(word, string) {
  // Construct a regular expression using the word and the 'g' flag to match all occurrences
  const regex = new RegExp(word, 'g');

  // Use the match() function with the regex to get an array of matched occurrences
  const matches = string.match(regex);

  // If matches is null or empty, return 0
  if (!matches) {
    return 0;
  }

  // Return the length of the matches array to get the count of occurrences
  return matches.length;
}

// Example usage:
const str = 'JavaScript is a powerful and flexible programming language. JavaScript is widely used in web development.';
const wordToCount = 'JavaScript';

const count = countOccurrences(wordToCount, str);
console.log(`The word '${wordToCount}' appears ${count} times.`);
