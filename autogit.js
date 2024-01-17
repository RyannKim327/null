function isPalindrome(str) {
  // Remove all non-alphanumeric characters and convert to lowercase
  const cleanedStr = str.toLowerCase().replace(/[\W_]/g, '');

  // Compare the cleaned string with its reversed version
  return cleanedStr === cleanedStr.split('').reverse().join('');
}
const str1 = "racecar";
console.log(isPalindrome(str1)); // Output: true

const str2 = "hello";
console.log(isPalindrome(str2)); // Output: false
