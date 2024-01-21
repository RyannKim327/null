function findFirstRepeatedCharacter(str) {
  var charMap = {};

  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (charMap[char]) {
      return char;
    } else {
      charMap[char] = true;
    }
  }
  
  return null; // Return null if no repeated character is found
}

var input = "abcda";
var repeatedChar = findFirstRepeatedCharacter(input);

console.log(repeatedChar); // Output: a
