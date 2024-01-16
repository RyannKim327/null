function isPalindrome(str) {
  // Convert the string to lowercase and remove non-alphanumeric characters
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Check if the clean string is equal to its reversed version
  return cleanStr === cleanStr.split('').reverse().join('');
}

// Example usage
const str1 = "A man, a plan, a canal – Panama";
console.log(isPalindrome(str1)); // Output: true

const str2 = "race car";
console.log(isPalindrome(str2)); // Output: true

const str3 = "Hello World";
console.log(isPalindrome(str3)); // Output: false
