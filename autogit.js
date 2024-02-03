function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const formattedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  
  // Compare the formatted string with its reverse
  return formattedStr === formattedStr.split('').reverse().join('');
}
console.log(isPalindrome("level"));       // true
console.log(isPalindrome("A car, a man")); // true
console.log(isPalindrome("hello"));       // false
