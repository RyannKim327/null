function isPalindrome(str) {
  // Initialize two pointers, one at the beginning and one at the end of the string
  let start = 0;
  let end = str.length - 1;

  // Iterate until the pointers meet
  while (start < end) {
    // Skip non-alphanumeric characters from the start
    if (!str[start].match(/[a-zA-Z0-9]/)) {
      start++;
      continue;
    }
    
    // Skip non-alphanumeric characters from the end
    if (!str[end].match(/[a-zA-Z0-9]/)) {
      end--;
      continue;
    }

    // Compare characters ignoring case
    if (str[start].toLowerCase() !== str[end].toLowerCase()) {
      return false;
    }

    // Move the pointers towards the center
    start++;
    end--;
  }

  // If the loop completes without returning false, the string is a valid palindrome
  return true;
}

// Example usage
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
console.log(isPalindrome("race a car")); // Output: false
