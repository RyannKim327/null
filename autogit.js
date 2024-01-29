function findFirstRepeatedChar(str) {
  var charSet = new Set();
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (charSet.has(char)) {
      return char;
    }
    charSet.add(char);
  }
  return null;
}

var inputString = "abcdeabcd";
var repeatedChar = findFirstRepeatedChar(inputString);
console.log("First repeated character is: " + repeatedChar);
