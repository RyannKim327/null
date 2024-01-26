function removeVowels(str) {
  // Use a regular expression to match all vowels (case-insensitive)
  const vowelsRegex = /[aeiou]/gi;
  
  // Use the replace() method to replace all matches with an empty string
  const result = str.replace(vowelsRegex, '');
  
  return result;
}

// Example usage
const inputString = 'Hello World';
const stringWithoutVowels = removeVowels(inputString);
console.log(stringWithoutVowels);  // Output: "Hll Wrld"
