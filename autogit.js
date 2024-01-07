function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Compare characters from both ends
  for (let i = 0; i < cleanStr.length / 2; i++) {
    if (cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]) {
      return false; // Characters don't match, not a palindrome
    }
  }
  
  return true; // All characters matched, it's a palindrome
}

// Usage examples:
console.log(isPalindrome("level")); // true
console.log(isPalindrome("algorithm")); // false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
