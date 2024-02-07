function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const sanitizedStr = str.replace(/[\W_]/g, '').toLowerCase();
  
  // Compare with the reversed string
  const reversedStr = sanitizedStr.split('').reverse().join('');
  
  return sanitizedStr === reversedStr;
}
const string1 = "racecar";
console.log(isPalindrome(string1));  // Output: true

const string2 = "hello";
console.log(isPalindrome(string2));  // Output: false

const string3 = "A man, a plan, a canal, Panama";
console.log(isPalindrome(string3));  // Output: true
