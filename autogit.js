function isValidPalindrome(str) {
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (str.charAt(start) !== str.charAt(end)) {
      return false;
    }
    start++;
    end--;
  }

  return true;
}

// Example usage:
console.log(isValidPalindrome("radar")); // true
console.log(isValidPalindrome("hello")); // false
