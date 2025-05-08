function isPalindrome(s: string): boolean {
  // Normalize the string: remove non-alphanumeric and case-insensitive
  // This can be done in place with pointers (more on that below)
  
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // Move left pointer to the next alphanumeric character
    while (left < right && !isAlphaNumeric(s[left])) {
      left++;
    }
    // Move right pointer to the previous alphanumeric character
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
  const code = char.charCodeAt(0);
  return (
    (code >= 48 && code <= 57) || // '0'-'9'
    (code >= 65 && code <= 90) || // 'A'-'Z'
    (code >= 97 && code <= 122)   // 'a'-'z'
  );
}
