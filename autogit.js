function isPalindrome(str) {
  // Convert the string to lowercase and remove non-alphanumeric characters
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  let left = 0; // Pointer for the start of the string
  let right = str.length - 1; // Pointer for the end of the string

  while (left < right) {
    if (str.charAt(left) !== str.charAt(right)) {
      return false; // Characters don't match, not a palindrome
    }
    left++; // Move left pointer forward
    right--; // Move right pointer backward
  }

  return true; // All characters matched, palindrome
}

// Example usage
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome("Madam")); // true
