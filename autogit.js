function isPalindrome(str) {
  // Convert the string to lowercase and remove non-alphanumeric characters
  str = str.toLowerCase().replace(/[\W_]/g, '');

  // Reverse the string
  var reversed = str.split('').reverse().join('');

  // Compare the reversed string with the original string
  return str === reversed;
}

// Example usage
console.log(isPalindrome('racecar')); // Output: true
console.log(isPalindrome('hello')); // Output: false
