function isPalindrome(str) {
  // Remove any non-alphanumeric characters and convert to lowercase
  str = str.replace(/[\W_]/g, "").toLowerCase();
  
  // Start comparing characters from both ends of the string
  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] !== str[j]) {
      return false; // Characters don't match, not a palindrome
    }
  }
  
  return true; // All characters match, it's a palindrome
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
