function findFirstNonRepeatingChar(str) {
  var charCount = {};

  for (var i = 0; i < str.length; i++) {
    var char = str.charAt(i);
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  }

  for (var i = 0; i < str.length; i++) {
    var char = str.charAt(i);
    if (charCount[char] === 1) {
      return char;
    }
  }

  return ''; // Return an empty string if no non-repeating character is found
}

// Example usage:
var str = "abacabad";
console.log(findFirstNonRepeatingChar(str)); // Output: "c"
