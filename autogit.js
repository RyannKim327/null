function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const alphanumericStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Reverse the string
  const reversedStr = alphanumericStr.split('').reverse().join('');

  // Compare the reversed string with the original string
  return alphanumericStr === reversedStr;
}
const str1 = "A man, a plan, a canal: Panama";
const str2 = "race a car";

console.log(isPalindrome(str1));  // Output: true
console.log(isPalindrome(str2));  // Output: false
