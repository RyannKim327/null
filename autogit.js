function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Compare the reversed string with the original string
  return cleanStr === cleanStr.split('').reverse().join('');
}

// Example usage
console.log(isPalindrome('A man, a plan, a canal, Panama')); // true
console.log(isPalindrome('Hello, world!')); // false
