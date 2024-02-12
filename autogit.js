function removeVowels(str) {
  // Use the regular expression /[aeiou]/gi to match all vowels, regardless of case
  // 'g' flag ensures global match (find all occurrences), 'i' flag ignores case
  return str.replace(/[aeiou]/gi, "");
}

var inputString = "Hello World!";
var result = removeVowels(inputString);
console.log(result);  // Output: Hll Wrld!
