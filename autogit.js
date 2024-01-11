function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  var cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Compare with its reversed version
  var reversedStr = cleanStr.split('').reverse().join('');

  // Check if the reversed string is the same as the original string
  return cleanStr === reversedStr;
}

// Test the function
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello world")); // false
console.log(isPalindrome("A man, a plan, a canal, Panama!")); // true
