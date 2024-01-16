function isPalindrome(str) {
  // Convert the string to lowercase and remove non-alphanumeric characters
  const alphanumericStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Initialize two pointers at the start and end of the string
  let left = 0;
  let right = alphanumericStr.length - 1;

  // Iterate until the pointers meet in the middle
  while (left < right) {
    // If the characters at both pointers are not equal, return false
    if (alphanumericStr[left] !== alphanumericStr[right]) {
      return false;
    }

    // Move both pointers towards the center
    left++;
    right--;
  }

  // If the loop completes, the string is a valid palindrome
  return true;
}

// Example usage
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car"));                   // false
console.log(isPalindrome("level"));                         // true
