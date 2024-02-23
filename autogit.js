function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert the string to lowercase
  const cleanStr = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
  
  // Reverse the clean string
  const reversedStr = cleanStr.split('').reverse().join('');
  
  // Check if the clean string is equal to its reversed version
  return cleanStr === reversedStr;
}

// Test the function
const testString = "A man, a plan, a canal, Panama";
if (isPalindrome(testString)) {
  console.log(`${testString} is a palindrome.`);
} else {
  console.log(`${testString} is not a palindrome.`);
}
