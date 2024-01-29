function isPalindrome(str) {
  // Remove non-alphanumeric characters
  const alphanumeric = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  
  // Compare with the reversed string
  return alphanumeric === alphanumeric.split('').reverse().join('');
}

// Example usage
const testString1 = "A man, a plan, a canal, Panama!";
console.log(isPalindrome(testString1)); // Output: true

const testString2 = "Hello, World!";
console.log(isPalindrome(testString2)); // Output: false
