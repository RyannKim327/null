function isPalindrome(str) {
  // Convert the string to lowercase for case-insensitive comparison
  str = str.toLowerCase();

  // Initialize two pointers, one from the start and one from the end
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    // Skip non-alphanumeric characters from the left
    while (!isAlphaNumeric(str[left])) {
      left++;
    }

    // Skip non-alphanumeric characters from the right
    while (!isAlphaNumeric(str[right])) {
      right--;
    }

    // Compare the characters at both pointers
    if (str[left] !== str[right]) {
      return false;
    }

    // Move the pointers closer
    left++;
    right--;
  }

  // If the loop completes without returning false, the string is a valid palindrome
  return true;
}

function isAlphaNumeric(char) {
  // Regular expression to check if a character is alphanumeric
  return /[a-z0-9]/i.test(char);
}
