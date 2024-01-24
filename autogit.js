function removeVowels(str) {
  // Use the replace() function with a regular expression to remove all vowels
  return str.replace(/[aeiou]/gi, "");
}

console.log(removeVowels("Hello World")); // Output: Hll Wrld
function removeVowels(str) {
  var vowels = "aeiouAEIOU";
  var result = "";

  // Loop through each character in the string
  for (var i = 0; i < str.length; i++) {
    var char = str.charAt(i);

    // Check if the character is a vowel
    if (vowels.indexOf(char) === -1) {
      // If it's not a vowel, append it to the result
      result += char;
    }
  }

  return result;
}

console.log(removeVowels("Hello World")); // Output: Hll Wrld
