function removeVowels(str) {
  // Use regex to match all vowels (both lowercase and uppercase)
  const vowels = /[aeiou]/gi;

  // Use the replace() method to remove vowels from the string
  const result = str.replace(vowels, '');

  return result;
}

// Example usage
const input = 'Hello, World!';
const output = removeVowels(input);

console.log(output); // Output: Hll, Wrld!
