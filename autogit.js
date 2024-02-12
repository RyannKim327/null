function removeVowels(str) {
  return str.replace(/[aeiou]/gi, '');
}

// Example usage
const text = "Hello World";
const result = removeVowels(text);
console.log(result); // Output: Hll Wrld
