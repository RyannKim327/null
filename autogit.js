function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert the string to lowercase
  str = str.replace(/[\W_]/g, '').toLowerCase();

  // Compare the string with its reversed version
  return str === str.split('').reverse().join('');
}

// Test the function
const testString = "A man, a plan, a canal, Panama";
console.log(isPalindrome(testString)); // Output: true
