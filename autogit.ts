function isPalindrome(str: string): boolean {
  // Normalize the string: lowercase and remove non-alphanumeric characters
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  // Reverse the cleaned string
  const reversed = cleaned.split('').reverse().join('');
  
  // Check if cleaned string equals its reverse
  return cleaned === reversed;
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("Hello")); // false
