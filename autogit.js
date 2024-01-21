function findFirstNonRepeatingCharacter(str) {
  var charCount = {};

  // count the occurrences of each character
  for (var i = 0; i < str.length; i++) {
    var char = str.charAt(i);
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  // find the first character with count 1
  for (var j = 0; j < str.length; j++) {
    var char = str.charAt(j);
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null; // return null if no non-repeating character is found
}

// example usage
var str = "aabccdde";
var firstNonRepeatingChar = findFirstNonRepeatingCharacter(str);
console.log("First non-repeating character:", firstNonRepeatingChar);
