function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const sanitizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Reverse the string
  const reversedStr = sanitizedStr.split('').reverse().join('');

  // Compare the reversed string with the original string
  return sanitizedStr === reversedStr;
}
const string1 = "A man, a plan, a canal: Panama";
console.log(isPalindrome(string1)); // Output: true

const string2 = "race car";
console.log(isPalindrome(string2)); // Output: true

const string3 = "Hello, world!";
console.log(isPalindrome(string3)); // Output: false
