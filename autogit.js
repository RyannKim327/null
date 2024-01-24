function findFirstRepeatedCharacter(str) {
  // Keep track of visited characters
  var visitedChars = {};

  // Iterate through each character in the string
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    
    // If the character is already visited, it is the first repeated character
    if (visitedChars[char]) {
      return char;
    }
    
    // Mark the character as visited
    visitedChars[char] = true;
  }

  // Return null if no repeated character is found
  return null;
}

// Example usage
var str = "abcdeff";
var repeatedChar = findFirstRepeatedCharacter(str);
console.log(repeatedChar); // Output: "f"
