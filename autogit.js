function findFirstRepeatedChar(str) {
  var frequency = {};

  for (var i = 0; i < str.length; i++) {
    var char = str[i];

    if (frequency[char]) {
      return char;
    } else {
      frequency[char] = 1;
    }
  }

  return null;
}

// Example usage
var firstRepeatedChar = findFirstRepeatedChar("hello world");
console.log(firstRepeatedChar); // Output: 'l'
