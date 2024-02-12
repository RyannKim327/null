function findFirstRepeatedChar(str) {
  var charSet = new Set();

  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (charSet.has(char)) {
      return char;
    }
    charSet.add(char);
  }

  return null;  // If no repeated character is found
}

// Example usage:
var inputString = "Hello World!";
var result = findFirstRepeatedChar(inputString);
console.log(result);  // Output: l
