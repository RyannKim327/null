function isPalindrome(str) {
  // Remove any non-alphanumeric characters and convert to lowercase
  str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

  // Check if the reversed string is equal to the original string
  return str === str.split('').reverse().join('');
}
let str1 = "A man, a plan, a canal, Panama.";
let str2 = "Racecar";
let str3 = "Hello, World!";

console.log(isPalindrome(str1)); // Output: true
console.log(isPalindrome(str2)); // Output: true
console.log(isPalindrome(str3)); // Output: false
