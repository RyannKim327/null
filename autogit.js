function removeVowels(str) {
  return str.replace(/[aeiou]/gi, '');
}

// Example usage
const inputString = 'Hello, World!';
const result = removeVowels(inputString);
console.log(result); // Output: Hll, Wrld!
