function removeVowels(str) {
  // Use regular expression to match all vowels (i, e, a, o, u) in the string
  var removed = str.replace(/[aeiou]/gi, '');
  return removed;
}

var input = "Hello, World!";
var result = removeVowels(input);

console.log(result); // Output: "Hll, Wrld!"
