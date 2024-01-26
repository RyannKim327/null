function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const processedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  
  // Create a reversed version of the string
  const reversedStr = processedStr.split('').reverse().join('');
  
  // Compare original string with reversed string
  return processedStr === reversedStr;
}

// Test the function
const string1 = "A man, a plan, a canal: Panama";
console.log(isPalindrome(string1)); // Output: true

const string2 = "race a car";
console.log(isPalindrome(string2)); // Output: false
