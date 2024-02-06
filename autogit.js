function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  str = str.replace(/[\W_]/g, '').toLowerCase();

  // Reverse the modified string
  const reversedStr = str.split('').reverse().join('');

  // Compare reversed string with the original string
  return str === reversedStr;
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("race car")); // Output: true
console.log(isPalindrome("hello world")); // Output: false
