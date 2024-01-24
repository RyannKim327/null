function removeVowels(str) {
  return str.replace(/[aeiou]/gi, "");
}

// Example usage
const input = "Hello, world!";
const result = removeVowels(input);
console.log(result); // Output: "Hll, wrld!"
