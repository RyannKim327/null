function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const alphanumericStr = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
  
  // Compare the original string with its reversed version
  return alphanumericStr === alphanumericStr.split('').reverse().join('');
}

// Test the function
const inputString = 'A man, a plan, a canal, Panama!';
console.log(isPalindrome(inputString)); // Output: true
