function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  let modifiedStr = str.toLowerCase().replace(/[\W_]/g, '');

  // Reverse the modified string
  let reversedStr = modifiedStr.split('').reverse().join('');

  // Compare the modified and reversed strings
  return modifiedStr === reversedStr;
}
console.log(isPalindrome("racecar"));  // true
console.log(isPalindrome("hello"));    // false
console.log(isPalindrome("A man, a plan, a canal, Panama!"));  // true
