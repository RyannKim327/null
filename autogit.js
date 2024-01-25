function findFirstNonRepeatingChar(str) {
  // Create an empty hashtable (or an object)
  var charCount = {};

  // Iterate over each character in the string
  for (var i = 0; i < str.length; i++) {
    var char = str[i];

    // Increment the count of the character in the hashtable
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  // Iterate over each character in the string again
  for (var i = 0; i < str.length; i++) {
    var char = str[i];

    // Return the first character with a count of 1
    if (charCount[char] === 1) {
      return char;
    }
  }

  // If no non-repeating character was found, return null
  return null;
}

// Example usage:
var str = "hello";
console.log(findFirstNonRepeatingChar(str));  // Output: 'h'
