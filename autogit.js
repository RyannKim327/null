function removeVowels(str) {
  return str.replace(/[aeiou]/gi, '');
}

var myString = "Hello, World!";
var result = removeVowels(myString);
console.log(result);  // Output: "Hll, Wrld!"
