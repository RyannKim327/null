function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  str = str.toLowerCase().replace(/[\W_]/g, '');
  
  // Compare characters from start and end of the string
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  
  return true;
}

// Test the function
console.log(isPalindrome('A man, a plan, a canal, Panama')); // Output: true
console.log(isPalindrome('racecar')); // Output: true
console.log(isPalindrome('hello')); // Output: false
