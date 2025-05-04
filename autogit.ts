function isPalindrome(s: string): boolean {
  // Remove all non-alphanumeric characters and lowercase the string
  const cleaned = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  // Compare the cleaned string to its reverse
  const reversed = cleaned.split('').reverse().join('');
  
  return cleaned === reversed;
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("hello")); // false
