function removeVowels(str) {
  return str.replace(/[aeiou]/gi, ''); // Matches all vowels (both lowercase and uppercase) and removes them
}

var string = 'Hello, World!';
var result = removeVowels(string);
console.log(result); // Output: "Hll, Wrld!"
