function isPalindrome(str) {
  // Remove all non-alphanumeric characters and convert to lowercase
  const processedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Compare the processed string with its reverse
  return processedStr === processedStr.split('').reverse().join('');
}

// Example usage
console.log(isPalindrome("level")); // Output: true
console.log(isPalindrome("hello")); // Output: false
console.log(isPalindrome("A man, a plan, a canal, Panama!")); // Output: true
