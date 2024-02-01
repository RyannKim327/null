function removeVowels(str) {
  // Use regular expression to match all vowels (both lowercase and uppercase)
  // and replace them with an empty string
  return str.replace(/[aeiou]/gi, '');
}

// Example usage
console.log(removeVowels("Hello, World!")); // Output: Hll, Wrld!
console.log(removeVowels("JavaScript")); // Output: JvScrpt
