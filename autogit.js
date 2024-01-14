function removeVowels(str) {
  return str.replace(/[aeiou]/gi, '');
}

// Example usage:
const string = "Hello World";
const result = removeVowels(string);
console.log(result); // Output: "Hll Wrld"
