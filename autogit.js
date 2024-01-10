function isValidPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str.charAt(left) !== str.charAt(right)) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

// Example usage
console.log(isValidPalindrome("radar")); // Output: true
console.log(isValidPalindrome("level")); // Output: true
console.log(isValidPalindrome("hello")); // Output: false
