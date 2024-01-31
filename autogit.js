function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  str = str.replace(/[^a-z0-9]/gi, '').toLowerCase();

  // Iterate over half the string length
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    // Check if the characters at both ends of the string match
    if (str[i] !== str[str.length - 1 - i]) {
      return false; // Not a palindrome
    }
  }

  return true; // Palindrome
}
