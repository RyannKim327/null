function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert string to lowercase
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Check if the reversed string is equal to the original string
  return str === str.split('').reverse().join('');
}

// Example use:
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
