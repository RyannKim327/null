function isPalindrome(str) {
  // Remove any non-alphanumeric characters and convert to lowercase
  const original = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  const reversed = original.split("").reverse().join("");
  
  return original === reversed;
}

// Example usage
console.log(isPalindrome("racecar"));         // true
console.log(isPalindrome("Hello, World!"));  // false
