function isPalindrome(str) {
  let left = 0; // Pointer to the start of the string
  let right = str.length - 1; // Pointer to the end of the string

  while (left < right) {
    if (str[left] !== str[right]) {
      return false; // Characters don't match, not a palindrome
    }

    left++; // Move left pointer to the right
    right--; // Move right pointer to the left
  }

  return true; // All characters match, it's a palindrome
}

// Example usage
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("abccba")); // true
