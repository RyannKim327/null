function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const formattedStr = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
  
  // Compare the string with its reverse
  return formattedStr === formattedStr.split('').reverse().join('');
}

// Usage example
const input1 = "racecar";
console.log(isPalindrome(input1)); // Output: true

const input2 = "hello";
console.log(isPalindrome(input2)); // Output: false
