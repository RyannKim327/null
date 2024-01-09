function removeVowels(str) {
  // Use regular expression to match all vowels (case insensitive)
  return str.replace(/[aeiou]/gi, '');
}

var inputString = "Hello World";
var result = removeVowels(inputString);
console.log(result); // Output: "Hll Wrld"
