function isPalindrome(str) {
  // Convert the string to lowercase and remove non-alphanumeric characters
  const alphaNumericStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  let start = 0;
  let end = alphaNumericStr.length - 1;

  while (start < end) {
    if (alphaNumericStr[start] !== alphaNumericStr[end]) {
      return false; // Not a palindrome
    }
    start++;
    end--;
  }

  return true; // Palindrome
}
