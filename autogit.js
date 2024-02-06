function removeVowels(str) {
  return str.replace(/[aeiou]/gi, '');
}

// Example usage:
var inputString = "Hello World!";
var result = removeVowels(inputString);
console.log(result); // Output: "Hll Wrld!"
