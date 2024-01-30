function isValidPalindrome(str) {
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (str[start] !== str[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
}

// Example usage:
console.log(isValidPalindrome("racecar")); // true
console.log(isValidPalindrome("hello")); // false
console.log(isValidPalindrome("madam")); // true
