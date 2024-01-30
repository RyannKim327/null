function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  
  // Reverse the string
  const reversedStr = cleanStr.split("").reverse().join("");
  
  // Compare the original string with the reversed one
  return cleanStr === reversedStr;
}

// Example usage
const input = "A man, a plan, a canal, Panama!";
console.log(isPalindrome(input)); // Output: true
