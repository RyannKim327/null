function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lower case
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Create the reversed version of the string
  var reversed = str.split("").reverse().join("");

  // Compare the original string with its reversed version
  return str === reversed;
}

// Test the function
console.log(isPalindrome("level")); // true
console.log(isPalindrome("Hello")); // false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
