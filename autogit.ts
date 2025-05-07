function isPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // Move left pointer if current char is not alphanumeric
    while (left < right && !isAlphaNumeric(s[left])) {
      left++;
    }
    // Move right pointer if current char is not alphanumeric
    while (left < right && !isAlphaNumeric(s[right])) {
      right--;
    }

    // Compare characters case-insensitively
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

function isAlphaNumeric(char: string): boolean {
  return /^[a-z0-9]$/i.test(char);
}
