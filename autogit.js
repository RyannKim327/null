function isPalindrome(str) {
  // Remove any non-alphanumeric characters and convert string to lowercase
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  // Check if the cleaned string is equal to its reverse
  return cleanStr === cleanStr.split('').reverse().join('');
}

// Example usage
console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
console.log(isPalindrome('race car')); // true
console.log(isPalindrome('Hello, World!')); // false
