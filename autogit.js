function isPalindrome(str) {
  // Remove non-alphanumeric characters
  str = str.replace(/[\W_]/g, '');

  // Convert string to lowercase
  str = str.toLowerCase();

  // Reverse the string
  var reversed = str.split('').reverse().join('');

  // Compare reversed string with original string
  return str === reversed;
}

// Test the function
var input = "A man, a plan, a canal: Panama";
console.log(isPalindrome(input));  // Output: true

input = "race car";
console.log(isPalindrome(input));  // Output: true

input = "hello world";
console.log(isPalindrome(input));  // Output: false
