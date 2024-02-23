function removeVowels(str) {
  return str.replace(/[aeiouAEIOU]/g, '');
}

// Example usage
const input = "Hello, World!";
const result = removeVowels(input);

console.log(result); // Output: "Hll, Wrld!"
