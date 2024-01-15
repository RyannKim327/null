function removeVowels(str) {
  return str.replace(/[aeiou]/gi, '');
}
var myString = "Hello, World!";
var stringWithoutVowels = removeVowels(myString);
console.log(stringWithoutVowels); // Output: "Hll, Wrld!"
