function removeVowels(str) {
  return str.replace(/[aeiou]/gi, '');
}

var input = 'Hello, World!';
var output = removeVowels(input);

console.log(output); // Output: Hll, Wrld!
