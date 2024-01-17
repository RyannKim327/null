function removeVowels(str) {
  return str.replace(/[aeiou]/gi, '');
}

// Example usage:
let input = "Hello World";
let result = removeVowels(input);
console.log(result); // Output: "Hll Wrld"
