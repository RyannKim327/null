function removeVowels(str) {
  // Use the replace() method with a regular expression to remove vowels
  var removed = str.replace(/[aeiou]/gi, '');

  return removed;
}

var myString = "Hello, World!"; // Example string
var result = removeVowels(myString);
console.log(result);
Hll, Wrld!
