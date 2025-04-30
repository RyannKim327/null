function isPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // If characters at left and right don’t match, it's not a palindrome
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}
function isValidPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // Skip non-alphanumeric characters on the left
    while (left < right && !isAlphaNumeric(s[left])) {
      left++;
    }
    // Skip non-alphanumeric characters on the right
    while (left < right && !isAlphaNumeric(s[right])) {
      right--;
    }
    // Case-insensitive comparison
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

function isAlphaNumeric(c: string): boolean {
  return /^[a-z0-9]$/i.test(c);
}
