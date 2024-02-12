function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const alphanumeric = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  // Reverse the string
  const reversed = alphanumeric.split('').reverse().join('');
  
  // Compare original string with reversed string
  return alphanumeric === reversed;
}

// Example usage
const string1 = "A man, a plan, a canal, Panama!";
console.log(isPalindrome(string1)); // Output: true

const string2 = "Hello, world!";
console.log(isPalindrome(string2)); // Output: false
