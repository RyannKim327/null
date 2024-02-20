function isPalindrome(str) {
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase(); // Remove non-alphanumeric characters and convert to lowercase
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false; // Characters at opposite ends don't match, not a palindrome
    }
    left++;
    right--;
  }

  return true; // If the while loop completes, the string is a palindrome
}

// Test the function
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("race a car")); // Output: false
