function isPalindrome(str) {
  // Convert to lowercase and remove non-alphanumeric characters
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Create the reversed copy
  var reversed = str.split('').reverse().join('');

  // Compare the original string with the reversed copy
  return str === reversed;
}

// Test cases
console.log(isPalindrome('level')); // true
console.log(isPalindrome('algorithm')); // false
console.log(isPalindrome('A man, a plan, a canal, Panama!')); // true
