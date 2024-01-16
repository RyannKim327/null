function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  var cleanedStr = str.replace(/[^0-9a-z]/gi, '').toLowerCase();

  // Reverse the string
  var reversedStr = cleanedStr.split('').reverse().join('');

  // Compare the original string with the reversed string
  return cleanedStr === reversedStr;
}

// Example usage
var str1 = "A man, a plan, a canal, Panama!";
console.log(isPalindrome(str1)); // Output: true

var str2 = "not a palindrome";
console.log(isPalindrome(str2)); // Output: false
