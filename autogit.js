function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const alphanumericStr = str.replace(/[\W_]/g, '').toLowerCase();
  
  // Set the pointers
  let start = 0;
  let end = alphanumericStr.length - 1;
  
  // Compare characters until pointers meet or cross each other
  while (start < end) {
    // If characters don't match, it's not a palindrome
    if (alphanumericStr[start] !== alphanumericStr[end]) {
      return false;
    }
    
    start++;
    end--;
  }
  
  // All characters matched, it's a palindrome
  return true;
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("race car")); // true
console.log(isPalindrome("Hello, World!")); // false
