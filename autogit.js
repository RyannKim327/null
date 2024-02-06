function removeVowels(str) {
  return str.replace(/[aeiou]/gi, "");
}

// Usage example
var inputString = "Hello World!";
var result = removeVowels(inputString);
console.log(result); // Output: Hll Wrld!
