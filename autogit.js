function isPalindrome(str) {
  // Remove non-alphanumeric characters
  const alphanumericStr = str.replace(/[\W_]/g, '');

  // Convert to lowercase
  const lowercaseStr = alphanumericStr.toLowerCase();

  // Reverse the string
  const reversedStr = lowercaseStr.split('').reverse().join('');

  // Compare the reversed string with the original string
  return lowercaseStr === reversedStr;
}

// Example usage
console.log(isPalindrome("level")); // Output: true
console.log(isPalindrome("Hello")); // Output: false
console.log(isPalindrome("A man, a plan, a canal, Panama!")); // Output: true
