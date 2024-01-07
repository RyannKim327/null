function isPalindrome(str) {
  // Convert the string to lowercase and remove non-alphanumeric characters
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Define the pointers
  let left = 0;
  let right = str.length - 1;

  // Move the pointers towards each other until they meet in the middle
  while (left < right) {
    // If the characters don't match, it's not a palindrome
    if (str.charAt(left) !== str.charAt(right)) {
      return false;
    }
    // Move the pointers
    left++;
    right--;
  }

  // If the loop completes without returning false, it's a palindrome
  return true;
}

// Example usage
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
