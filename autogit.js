function removeVowels(str) {
  // Use regular expression to match all vowels (case-insensitive) in the string
  let vowelsPattern = /[aeiou]/gi;

  // Replace all vowel matches with an empty string
  let result = str.replace(vowelsPattern, '');

  return result;
}

// Example usage
let input = 'Hello, World!';
let output = removeVowels(input);
console.log(output); // Output: Hll, Wrld!
