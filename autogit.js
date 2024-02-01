function removeVowels(str) {
  // Use regular expression to match all vowels and replace them with an empty string
  return str.replace(/[aeiou]/gi, '');
}

// Example usage
const input = 'Hello World';
const output = removeVowels(input);

console.log(output); // Output: Hll Wrld
