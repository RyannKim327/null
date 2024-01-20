function sanitizeString(str) {
  return str.toLowerCase().replace(/[^a-z0-9]/g, '');
}
function reverseString(str) {
  return str.split('').reverse().join('');
}
function isPalindrome(str) {
  const sanitizedString = sanitizeString(str);
  const reversedString = reverseString(sanitizedString);
  return sanitizedString === reversedString;
}
const str1 = 'race car';
console.log(isPalindrome(str1)); // Output: true

const str2 = 'hello world';
console.log(isPalindrome(str2)); // Output: false
