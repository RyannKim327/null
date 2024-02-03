function removeNonAlphanumeric(str) {
  return str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
}
function reverseString(str) {
  return str.split('').reverse().join('');
}
function isPalindrome(str) {
  const cleanStr = removeNonAlphanumeric(str);
  const reversedStr = reverseString(cleanStr);
  return cleanStr === reversedStr;
}
const word = "A man, a plan, a canal: Panama";
console.log(isPalindrome(word));  // Output: true
