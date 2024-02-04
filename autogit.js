function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  // Reverse the string
  let reverseStr = str.split('').reverse().join('');
  
  // Compare reversed string with original string
  return reverseStr === str;
}

// Example usage
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("Hello World")); // false
