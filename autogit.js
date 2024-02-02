function isValidPalindrome(str) {
  // Removing non-alphanumeric characters and converting to lowercase
  const formattedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  // Initialize two pointers
  let left = 0;
  let right = formattedStr.length - 1;
  
  // Loop until pointers meet
  while (left < right) {
    // If characters at the pointers don't match, it's not a palindrome
    if (formattedStr[left] !== formattedStr[right]) {
      return false;
    }
    
    // Move the pointers inward
    left++;
    right--;
  }
  
  // If the loop ends, it means the string is a palindrome
  return true;
}

// Testing the function:
console.log(isValidPalindrome("No 'x' in Nixon")); // true
console.log(isValidPalindrome("A man, a plan, a canal, Panama!")); // true
console.log(isValidPalindrome("Palindrome test")); // false
