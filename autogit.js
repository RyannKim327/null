function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const processedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Check if the processed string is equal to its reverse
  return processedStr === processedStr.split('').reverse().join('');
}

// Example usage:
const str = "A man, a plan, a canal, Panama!";
console.log(isPalindrome(str)); // Output: true
