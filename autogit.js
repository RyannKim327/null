function removeVowels(str) {
  return str.replace(/[aeiou]/gi, '');  // Matches all vowels (both lowercase and uppercase)
}

// Example usage:
console.log(removeVowels('Hello, World!'));  // Output: "Hll, Wrld!"
console.log(removeVowels('JavaScript'));    // Output: "JvScrpt"
