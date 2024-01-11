function removeVowels(str) {
  // Use regular expression to match all vowels (both lowercase and uppercase)
  // The 'gi' flags make it case-insensitive and match multiple occurrences
  const vowelsRegex = /[aeiou]/gi;

  // Use the replace() method to remove all vowels by replacing them with an empty space
  const result = str.replace(vowelsRegex, '');

  return result;
}

// Example usage:
const originalString = 'Hello, World!';
const stringWithoutVowels = removeVowels(originalString);
console.log(stringWithoutVowels); // Output: "Hll, Wrld!"
