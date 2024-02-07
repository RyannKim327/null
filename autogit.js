function removeVowels(str) {
  // Use regular expression to remove all vowels (both lowercase and uppercase)
  return str.replace(/[aeiouAEIOU]/g, '');
}

// Example usage
const inputString = 'Hello, World!';
const stringWithoutVowels = removeVowels(inputString);
console.log(stringWithoutVowels); // Output: "Hll, Wrld!"
