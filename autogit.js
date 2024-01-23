function findFirstRepeatedChar(inputString) {
  var charCount = {};

  // Traverse each character in the input string
  for (var i = 0; i < inputString.length; i++) {
    var char = inputString[i];

    // Check if the character already exists in the map
    if (charCount[char]) {
      // If it does, return the first repeated character
      return char;
    }

    // If the character doesn't exist, add it to the map
    charCount[char] = true;
  }

  // If no repeated character found
  return null;
}

// Example usage:
var string = "Hello World";
var repeatedChar = findFirstRepeatedChar(string);
console.log("First repeated character: " + repeatedChar);
