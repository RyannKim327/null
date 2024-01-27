function removeVowels(str) {
  // Use regular expression to replace all vowels (case-insensitive) with an empty string
  return str.replace(/[aeiou]/gi, '');
}

// Example usage
console.log(removeVowels("Hello World")); // Output: "Hll Wrld"
