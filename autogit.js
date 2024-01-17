function isPalindrome(str) {
  // Step 1
  const cleanedStr = str.replace(/[\W_]/g, '');

  // Step 2
  const lowercaseStr = cleanedStr.toLowerCase();

  // Step 3
  const reversedStr = lowercaseStr.split('').reverse().join('');

  // Step 4
  return lowercaseStr === reversedStr;
}

// Usage
const str1 = "A man, a plan, a canal: Panama";
console.log(isPalindrome(str1)); // Output: true

const str2 = "race car";
console.log(isPalindrome(str2)); // Output: true

const str3 = "hello world";
console.log(isPalindrome(str3)); // Output: false
