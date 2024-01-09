function isPalindrome(str) {
  // Remove all non-alphanumeric characters and convert to lowercase
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Reverse the string
  var reverseStr = str.split('').reverse().join('');

  // Compare the original string with the reversed string
  return str === reverseStr;
}

// Test the function
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("Hello")); // false
console.log(isPalindrome("A man, a plan, a canal, Panama!")); // true
