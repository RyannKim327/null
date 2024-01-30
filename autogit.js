function isPalindrome(str) {
  // Convert the string to lowercase to perform case-insensitive comparison
  str = str.toLowerCase();
  
  // Define two pointers to iterate from both ends of the string
  let start = 0;
  let end = str.length - 1;

  // Iterate until the two pointers meet or cross
  while (start < end) {
    // Skip non-alphanumeric characters
    if (!isAlphaNumeric(str[start])) {
      start++;
      continue;
    }
    if (!isAlphaNumeric(str[end])) {
      end--;
      continue;
    }
    
    // Compare characters at both pointers
    if (str[start] !== str[end]) {
      return false;
    }
    
    // Move the pointers towards the center
    start++;
    end--;
  }

  return true;
}

// Helper function to check if a character is alphanumeric
function isAlphaNumeric(char) {
  return /[a-z0-9]/.test(char);
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("race a car")); // Output: false
