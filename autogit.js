function isPalindrome(str) {
  // Remove non-alphanumeric characters
  str = str.replace(/[^a-zA-Z0-9]/g, '');

  // Convert to lowercase
  str = str.toLowerCase();

  // Create the reverse string
  var reverseStr = str.split('').reverse().join('');

  // Compare the original string with the reversed string
  return str === reverseStr;
}

// Example usage
var input = 'A man, a plan, a canal, Panama!';
console.log(isPalindrome(input)); // Output: true
