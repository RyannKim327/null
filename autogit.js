function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  var cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

  // Create a reversed version of the string
  var reversedStr = cleanedStr.split('').reverse().join('');

  // Compare the original string with the reversed string
  return cleanedStr === reversedStr;
}

// Example usage
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
