function isPalindrome(str) {
  // Convert string to lowercase and remove non-alphanumeric characters
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  // Initialize two pointers, one at the start and the other at the end of the string
  let left = 0;
  let right = str.length - 1;
  
  // Iterate while the pointers don't cross each other
  while (left < right) {
    // If the characters at the pointers are not equal, the string is not a palindrome
    if (str[left] !== str[right]) {
      return false;
    }
    
    // Move the pointers inward
    left++;
    right--;
  }
  
  // If the loop completed without finding any unequal characters, the string is a palindrome
  return true;
}

// Example usage:
console.log(isPalindrome('A man, a plan, a canal: Panama')); // Output: true
console.log(isPalindrome('race a car')); // Output: false
