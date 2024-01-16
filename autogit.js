function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  str = str.toLowerCase().replace(/[\W_]/g, '');

  // Check if the reversed string is equal to the original string
  return str === str.split('').reverse().join('');
}

// Example usage
console.log(isPalindrome('level')); // Output: true
console.log(isPalindrome('hello')); // Output: false
console.log(isPalindrome('A man, a plan, a canal: Panama')); // Output: true
