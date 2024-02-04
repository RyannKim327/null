function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  var cleanStr = str.replace(/[\W_]/g, '').toLowerCase();
  
  // Reverse the string
  var reversedStr = cleanStr.split('').reverse().join('');
  
  // Compare the original string with the reversed string
  return cleanStr === reversedStr;
}

// Example Usage:
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
