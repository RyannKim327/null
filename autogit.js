function removeVowels(str) {
  return str.replace(/[aeiouAEIOU]/g, '');
}

// Example usage
const inputString = "Hello, World!";
const stringWithoutVowels = removeVowels(inputString);

console.log(stringWithoutVowels); // Output: "Hll, Wrld!"
