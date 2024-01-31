function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const formattedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  // Reverse the string
  const reversedStr = formattedStr.split('').reverse().join('');
  
  // Compare the original string with the reversed string
  return formattedStr === reversedStr;
}

// Test the function
const str1 = "A man, a plan, a canal: Panama";
console.log(isPalindrome(str1));  // Output: true

const str2 = "racecar";
console.log(isPalindrome(str2));  // Output: true

const str3 = "Hello world";
console.log(isPalindrome(str3));  // Output: false
