function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert the string to lowercase
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  
  // Compare the string to its reverse
  return str === str.split("").reverse().join("");
}

// Example usage:
console.log(isPalindrome("level"));       // true
console.log(isPalindrome("A man, a plan, a canal, Panama!"));  // true
console.log(isPalindrome("Hello, world!"));  // false
