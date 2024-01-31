function findFirstNonRepeatingChar(str) {
  // Create an empty object to store character frequencies
  var freq = {};

  // Iterate over each character in the string and count its frequency
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    freq[char] = (freq[char] || 0) + 1;
  }

  // Iterate over each character again and find the first one with a frequency of 1
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (freq[char] === 1) {
      return char;
    }
  }

  // If no non-repeating character is found, return null
  return null;
}

// Example usage
var string = "hello";
var firstNonRepeatingChar = findFirstNonRepeatingChar(string);
console.log(firstNonRepeatingChar);
