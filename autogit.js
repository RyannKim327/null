function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  str = str.replace(/[\W_]/g, "").toLowerCase();

  // Reverse the string
  var reversed = str.split("").reverse().join("");

  // Compare the reversed string with the original string
  return str === reversed;
}

// Example usage
var input = "A man, a plan, a canal. Panama!";
console.log(isPalindrome(input));  // Output: true
