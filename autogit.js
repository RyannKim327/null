function isPalindrome(str) {
  // Convert the string to lowercase
  str = str.toLowerCase();

  // Initialize two pointers, one at the beginning and one at the end of the string
  let left = 0;
  let right = str.length - 1;

  // Iterate until the two pointers meet in the middle
  while (left < right) {
    // Ignore non-alphanumeric characters by skipping them
    while (!isAlphanumeric(str[left])) {
      left++;
    }
    while (!isAlphanumeric(str[right])) {
      right--;
    }

    // If the characters at the two pointers are not equal, the string is not a palindrome
    if (str[left] !== str[right]) {
      return false;
    }

    // Move the pointers towards the middle
    left++;
    right--;
  }

  // If the loop completes without finding any mismatch, the string is a palindrome
  return true;
}

// Helper function to check if a character is alphanumeric
function isAlphanumeric(char) {
  return /[a-z0-9]/.test(char);
}

// Example usage
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome("No 'x' in Nixon")); // true
