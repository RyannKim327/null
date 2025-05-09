function isPalindrome(str: string): boolean {
  // Normalize the string by removing non-alphanumeric characters and making it lowercase
  const normalized = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  
  // Reverse the normalized string
  const reversed = normalized.split('').reverse().join('');
  
  // Check if the normalized string is equal to its reversed version
  return normalized === reversed;
}

// Usage example
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("hello")); // false
