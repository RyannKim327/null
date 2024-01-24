function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Compare the reversed string with the original string
  return cleanStr === cleanStr.split("").reverse().join("");
}

// Example usage
const str1 = "radar";
console.log(isPalindrome(str1)); // Output: true

const str2 = "Hello, World!";
console.log(isPalindrome(str2)); // Output: false
