function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const modifiedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Compare with its reversed version
  const reversedStr = modifiedStr.split('').reverse().join('');
  
  return modifiedStr === reversedStr;
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal, Panama"));  // true
console.log(isPalindrome("Hello, World!"));                 // false
