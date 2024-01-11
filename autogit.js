function isPalindrome(str) {
  // Step 1: Remove non-alphanumeric characters and convert to lowercase
  const alphanumericStr = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
  
  // Step 2: Reverse the string
  const reversedStr = alphanumericStr.split('').reverse().join('');
  
  // Step 3: Compare original and reversed strings
  return alphanumericStr === reversedStr;
}

// Example usage
const string1 = "racecar";
console.log(isPalindrome(string1)); // Output: true

const string2 = "hello";
console.log(isPalindrome(string2)); // Output: false
