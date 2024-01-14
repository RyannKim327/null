function removeVowels(str) {
  // Remove all vowels using regular expressions
  var result = str.replace(/[aeiou]/gi, '');
  return result;
}

var input = 'Hello, World!';
var output = removeVowels(input);
console.log(output); // Output: "Hll, Wrld!"
