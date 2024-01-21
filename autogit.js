function isPalindrome(str) {
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (str[start] !== str[end]) {
      return false; // Characters don't match, not a palindrome
    }
    start++;
    end--;
  }

  return true; // All characters matched, palindrome
}
