function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  var cleanStr = str.replace(/[\W_]/g, '').toLowerCase();

  // Reverse the string
  var reversedStr = cleanStr.split('').reverse().join('');

  // Check if the original and reversed strings are equal
  return cleanStr === reversedStr;
}

// Examples
console.log(isPalindrome("level")); // true
console.log(isPalindrome("Hello World")); // false
console.log(isPalindrome("A man, a plan, a canal, Panama!")); // true
