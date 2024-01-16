function findLongestCommonPrefix(strings) {
  if (strings.length === 0) {
    return "";
  }

  if (strings.length === 1) {
    return strings[0];
  }

  strings.sort();

  var firstString = strings[0];
  var lastString = strings[strings.length - 1];
  var longestPrefix = "";

  for (var i = 0; i < firstString.length; i++) {
    if (firstString[i] === lastString[i]) {
      longestPrefix += firstString[i];
    } else {
      break;
    }
  }

  return longestPrefix;
}

// Example usage:
var strings = ["flower", "flight", "flour"];
console.log(findLongestCommonPrefix(strings)); // Output: "fl"
