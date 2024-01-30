function findFirstNonRepeatingChar(str) {
  // Create an empty object to store character frequencies
  var charCount = {};

  // Loop through the string and count each character occurrence
  for (var i = 0; i < str.length; i++) {
    var char = str.charAt(i);
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  }

  // Loop through the string again and find the first character with frequency 1
  for (var j = 0; j < str.length; j++) {
    var char = str.charAt(j);
    if (charCount[char] === 1) {
      return char; // Return the first non-repeating character
    }
  }

  return null; // Return null if no non-repeating character is found
}

// Example usage:
console.log(findFirstNonRepeatingChar("hello")); // Output: "h"
console.log(findFirstNonRepeatingChar("aabbcdd")); // Output: "c"
console.log(findFirstNonRepeatingChar("aabbcc")); // Output: null (no non-repeating characters)
