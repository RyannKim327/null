function isPalindrome(str) {
  // Convert the string to lowercase
  str = str.toLowerCase();
  
  // Initialize two pointers, one at the beginning and one at the end of the string
  let left = 0;
  let right = str.length - 1;
  
  // Iterate until the pointers meet or cross each other
  while (left < right) {
    // Skip non-alphanumeric characters from the left pointer
    while (!isAlphanumeric(str.charAt(left))) {
      left++;
    }
    
    // Skip non-alphanumeric characters from the right pointer
    while (!isAlphanumeric(str.charAt(right))) {
      right--;
    }
    
    // If the characters at the pointers are not equal, the string is not a palindrome
    if (str.charAt(left) !== str.charAt(right)) {
      return false;
    }
    
    // Move the pointers towards each other
    left++;
    right--;
  }
  
  // If the loop completes without returning false, the string is a valid palindrome
  return true;
}

function isAlphanumeric(char) {
  // Regular expression to match only alphanumeric characters
  const regex = /[a-zA-Z0-9]/;
  
  // Return true if the character matches the regex
  return regex.test(char);
}

// Example usage
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome("level")); // true
