function firstNonRepeatingChar(str) {
  var charCount = {};

  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (var j = 0; j < str.length; j++) {
    var char = str[j];
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null;
}

// Example usage:
var string = "aabbcdeeff";
console.log(firstNonRepeatingChar(string)); // Output: "c"
