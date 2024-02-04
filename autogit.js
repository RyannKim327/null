function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const modifiedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  // Compare modified string with its reversed version
  return modifiedStr === modifiedStr.split('').reverse().join('');
}
console.log(isPalindrome("racecar"));      // true
console.log(isPalindrome("Hello"));        // false
console.log(isPalindrome("A man, a plan, a canal, Panama!")); // true
console.log(isPalindrome("12321"));        // true
