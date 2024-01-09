function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  var alphanumeric = str.replace(/[^0-9a-z]/gi, "").toLowerCase();
  
  // Create the reversed string
  var reversed = alphanumeric.split("").reverse().join("");
  
  // Compare the original and reversed strings
  return alphanumeric === reversed;
}

// Example usage
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello world")); // Output: false
