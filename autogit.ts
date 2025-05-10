function isPalindrome(s: string): boolean {
  // Normalize the string: lowercase and remove non-alphanumeric characters
  const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  // Reverse the cleaned string
  const reversed = cleaned.split('').reverse().join('');
  
  // Check if it's the same as the original cleaned string
  return cleaned === reversed;
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("hello")); // false
