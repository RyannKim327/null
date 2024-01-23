function findFirstNonRepeatingChar(str) {
  // Create an empty object to store character counts
  var charCount = {};

  // Iterate through each character in the string, and count their occurrences
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  }

  // Iterate through the string again and return the first character with count 1
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (charCount[char] === 1) {
      return char;
    }
  }

  // If there are no non-repeating characters, return null
  return null;
}

// Example usage:
var str = "ababcdeff";
var firstNonRepeatingChar = findFirstNonRepeatingChar(str);
console.log(firstNonRepeatingChar); // Output: "c"
