function isPalindrome(str) {
  // Remove any non-alphanumeric characters and convert to lowercase
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Compare the clean string with its reverse
  return cleanStr === cleanStr.split('').reverse().join('');
}

// Example usage:
console.log(isPalindrome("level")); // true
console.log(isPalindrome("Hello")); // false
console.log(isPalindrome("A man, a plan, a canal, Panama!")); // true
