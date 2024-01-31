function isPalindrome(str) {
   // Remove non-alphanumeric characters and convert to lowercase
   const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

   // Compare characters from start and end of the string
   for (let i = 0, j = cleanedStr.length - 1; i < j; i++, j--) {
       if (cleanedStr[i] !== cleanedStr[j]) {
           return false;
       }
   }

   return true;
}

// Example usage
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
console.log(isPalindrome("race car")); // Output: true
console.log(isPalindrome("hello world")); // Output: false
function isPalindrome(str) {
   // Remove non-alphanumeric characters and convert to lowercase
   const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

   // Reverse the string and compare with original
   const reversedStr = cleanedStr.split('').reverse().join('');
   return cleanedStr === reversedStr;
}

// Example usage
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
console.log(isPalindrome("race car")); // Output: true
console.log(isPalindrome("hello world")); // Output: false
function isPalindrome(str) {
   // Remove non-alphanumeric characters and convert to lowercase
   const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

   // Base case: if the string length is 0 or 1, it's a palindrome
   if (cleanedStr.length <= 1) {
       return true;
   }

   // Recursive call: check if first and last characters are equal,
   // and recursively check the remaining substring
   if (cleanedStr[0] === cleanedStr[cleanedStr.length - 1]) {
       return isPalindrome(cleanedStr.substring(1, cleanedStr.length - 1));
   }

   return false;
}

// Example usage
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
console.log(isPalindrome("race car")); // Output: true
console.log(isPalindrome("hello world")); // Output: false
