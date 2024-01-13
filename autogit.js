function isPalindrome(str) {
  // Convert the string to lowercase and remove non-alphanumeric characters
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Initialize two pointers
  let start = 0;
  let end = str.length - 1;

  // Move the pointers towards each other until they meet
  while (start < end) {
    // If characters at the pointers are not equal, it's not a palindrome
    if (str[start] !== str[end]) {
      return false;
    }
    start++;
    end--;
  }

  // If the loop completes, it's a palindrome
  return true;
}

// Example usage
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("race a car")); // Output: false
