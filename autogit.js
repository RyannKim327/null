function isPalindrome(str) {
  // Convert the string to lowercase and remove non-alphanumeric characters
  const processedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Check if the processed string equals its reverse
  return processedStr === processedStr.split('').reverse().join('');
}

// Usage
const input = "A man, a plan, a canal, Panama!";
console.log(isPalindrome(input)); // Output: true
