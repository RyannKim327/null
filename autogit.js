function isValidPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanedStr = str.toLowerCase().replace(/[\W_]/g, '');

  // Reverse the string
  const reversedStr = cleanedStr.split('').reverse().join('');

  // Compare the original string with the reversed string
  return cleanedStr === reversedStr;
}

// Example usage
console.log(isValidPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isValidPalindrome("Hello, world!")); // Output: false
