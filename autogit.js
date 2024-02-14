function isPalindrome(str) {
  // Convert the string to lowercase and remove non-alphanumeric characters
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Compare the characters from start and end, moving towards the center
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    if (str[start] !== str[end]) {
      return false; // Characters don't match, not a palindrome
    }
    start++;
    end--;
  }

  return true; // All characters matched, it's a palindrome
}

// Example usage
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("race car")); // true
console.log(isPalindrome("hello world")); // false
