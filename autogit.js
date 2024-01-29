function removeVowels(str) {
  return str.replace(/[aeiou]/gi, '');
}

// Usage example:
const input = "Hello World!";
const output = removeVowels(input);
console.log(output); // Output: "Hll Wrld!"
