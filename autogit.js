function isValidPalindrome(str) {
  // Convert the input string to lowercase
  str = str.toLowerCase();

  // Initialize two pointers, one from the start and another from the end of the string
  let start = 0;
  let end = str.length - 1;

  // Iterate until the pointers meet in the middle
  while (start < end) {
    // Skip non-alphanumeric characters by moving the respective pointer
    while (!isAlphaNumeric(str.charAt(start))) {
      start++;
    }
    while (!isAlphaNumeric(str.charAt(end))) {
      end--;
    }

    // If the characters at the pointers are not equal, the string is not a palindrome
    if (str.charAt(start) !== str.charAt(end)) {
      return false;
    }

    // Move the pointers towards the middle
    start++;
    end--;
  }

  // If the loop completes without returning, the string is a palindrome
  return true;
}

// Helper function to check if a character is alphanumeric
function isAlphaNumeric(char) {
  return /^[0-9a-zA-Z]$/.test(char);
}

// Example usage
console.log(isValidPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isValidPalindrome("race a car")); // false
console.log(isValidPalindrome("Never odd or even")); // true
