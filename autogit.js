function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  str = str.replace(/[\W_]/g, '').toLowerCase();

  // Reverse the string
  let reversedStr = str.split('').reverse().join('');

  // Compare the original string with the reversed string
  return str === reversedStr;
}

// Example usage
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("Hello")); // false
