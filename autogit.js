function findFirstRepeatedCharacter(str) {
  var visited = {};
  
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    
    // If the character is already in the visited object, it's a repeat
    if (visited[char]) {
      return char;
    }
    
    // Otherwise, mark the character as visited
    visited[char] = true;
  }
  
  // If no repeated character is found, return null
  return null;
}

// Test case
var string = "abcdefgah";
var repeatedChar = findFirstRepeatedCharacter(string);

if (repeatedChar) {
  console.log("The first repeated character is: " + repeatedChar);
} else {
  console.log("No repeated character found.");
}
