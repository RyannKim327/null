function isPalindrome(str) {
  // Remove any non-alphanumeric characters and convert to lowercase
  var cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Reverse the string
  var reversedStr = cleanStr.split('').reverse().join('');

  // Compare the original string with the reversed string
  return cleanStr === reversedStr;
}

// Test cases
console.log(isPalindrome("level"));     // true
console.log(isPalindrome("A man, a plan, a canal: Panama"));  // true
console.log(isPalindrome("hello"));     // false
console.log(isPalindrome("12321"));     // true
