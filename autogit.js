function removeVowels(str) {
  return str.replace(/[aeiou]/gi, "");
}

// Example usage:
const inputString = "Hello World";
const stringWithoutVowels = removeVowels(inputString);
console.log(stringWithoutVowels); // Output: "Hll Wrld"
