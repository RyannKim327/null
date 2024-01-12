function removeVowels(str) {
  return str.replace(/[aeiou]/gi, '');
}

// Example usage
console.log(removeVowels('Hello World'));  // Output: Hll Wrld
console.log(removeVowels('JavaScript is awesome'));  // Output: JvScrpt s wsm
