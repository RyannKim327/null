function findFirstNonRepeatingChar(str) {
  // Create an empty object to store character counts
  var charCount = {};

  // Iterate over each character in the string and count its occurrences
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  }

  // Iterate over each character again and return the first non-repeating character
  for (var j = 0; j < str.length; j++) {
    var char = str[j];
    if (charCount[char] === 1) {
      return char;
    }
  }

  // If no non-repeating character is found, return null or any other value as desired
  return null;
}

// Example usage
var input = "abccadef";
var firstNonRepeatingChar = findFirstNonRepeatingChar(input);
console.log("First non-repeating character:", firstNonRepeatingChar);
