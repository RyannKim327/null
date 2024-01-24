function removeVowels(str) {
  return str.replace(/[aeiou]/gi, '');
}

var input = "Hello, World!";
var result = removeVowels(input);

console.log(result); // Output: "Hll, Wrld!"
