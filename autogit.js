function removeVowels(str) {
  // Use the replace() function with a regular expression to remove vowels
  // The regular expression [aeiou] matches any vowel (both lowercase and uppercase)
  // The 'gi' flags make the search case-insensitive (g: global, i: case-insensitive)
  return str.replace(/[aeiou]/gi, '');
}

// Usage example:
const input = 'Hello World!';
const output = removeVowels(input);
console.log(output); // Outputs: "Hll Wrld!"
