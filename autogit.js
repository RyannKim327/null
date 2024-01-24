function removeVowels(str) {
  // Use regular expressions to replace all vowels (case-insensitive) with an empty string
  return str.replace(/[aeiou]/gi, '');
}

// Example usage:
const inputString = 'Hello, World!';
const resultString = removeVowels(inputString);
console.log(resultString); // Output: Hll, Wrld!
