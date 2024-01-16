function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  
  // Reverse the string
  const reversed = str.split('').reverse().join('');
  
  // Compare reversed string with the original string
  return str === reversed;
}

// Test the function
console.log(isPalindrome("level")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
