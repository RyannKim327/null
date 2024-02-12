function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanedString = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Reverse the string
  const reversedString = cleanedString.split('').reverse().join('');

  // Compare the reversed string with the original string
  return cleanedString === reversedString;
}

// Example usage
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("hello world")); // Output: false
