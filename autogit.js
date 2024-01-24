function isPalindrome(str) {
  // Step 1: Remove non-alphanumeric characters and convert to lowercase
  const sanitizedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Step 2: Create a reverse copy of the string
  const reversedStr = sanitizedStr.split("").reverse().join("");

  // Step 3: Compare the original string with its reversed copy
  return sanitizedStr === reversedStr;
}

// Example usage
const string1 = "A man, a plan, a canal, Panama!";
console.log(isPalindrome(string1)); // Output: true

const string2 = "race car";
console.log(isPalindrome(string2)); // Output: true

const string3 = "Hello, world!";
console.log(isPalindrome(string3)); // Output: false
