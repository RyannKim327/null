function isPalindrome(str) {
  var cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  var start = 0;
  var end = cleanedStr.length - 1;

  while (start < end) {
    if (cleanedStr[start] !== cleanedStr[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

// Example usage
var str1 = "racecar";
console.log(isPalindrome(str1)); // Output: true

var str2 = "Hello World";
console.log(isPalindrome(str2)); // Output: false
