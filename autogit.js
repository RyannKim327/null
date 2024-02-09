function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const alphanumericStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  // Reverse the string
  const reversedStr = alphanumericStr.split("").reverse().join("");

  // Compare the original and reversed strings
  return alphanumericStr === reversedStr;
}

// Example usage
const string1 = "level";
console.log(isPalindrome(string1)); // Output: true

const string2 = "hello";
console.log(isPalindrome(string2)); // Output: false
