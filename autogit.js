function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  str = str.replace(/[\W_]/g, '').toLowerCase();

  // Reverse the modified string
  var reversed = str.split('').reverse().join('');

  // Compare the modified string with the reversed string
  return str === reversed;
}

// Example usage
console.log(isPalindrome('A man, a plan, a canal, Panama')); // Output: true
console.log(isPalindrome('Hello, World!')); // Output: false
