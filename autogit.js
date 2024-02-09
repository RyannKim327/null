function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  let alphanumericStr = str.replace(/[^0-9a-z]/gi, '').toLowerCase();

  // Reverse the string
  let reversedStr = alphanumericStr.split('').reverse().join('');

  // Compare the reversed string with the original string
  return alphanumericStr === reversedStr;
}
console.log(isPalindrome("racecar"));         // true
console.log(isPalindrome("A man, a plan, a canal, Panama!"));  // true
console.log(isPalindrome("hello world"));     // false
